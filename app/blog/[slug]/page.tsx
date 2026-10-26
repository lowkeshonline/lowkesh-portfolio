import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatPostDate, getAllPosts, getPostBySlug, readingTime } from "../../_utils/mdx";
import { MDXComponents } from "../../_components/MDXComponents";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.frontmatter.title} | Lokesh Chonga`,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="article-page" id="main-content">
      <div className="article-inner">
        <Link href="/blog" className="page-back">
          <ArrowLeft size={13} aria-hidden="true" /> All writing
        </Link>

        <header className="article-header">
          <p className="page-kicker">
            <span>06</span> · Writing
          </p>
          <h1>{post.frontmatter.title}</h1>
          <div className="article-meta">
            <time dateTime={post.frontmatter.date}>
              {formatPostDate(post.frontmatter.date)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{readingTime(post.content)} min read</span>
            {post.frontmatter.tags?.length ? (
              <div className="article-tags">
                {post.frontmatter.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <article className="article-content">
          <MDXRemote source={post.content} components={MDXComponents} />
        </article>

        <div className="article-footer">
          <Link href="/blog" className="page-back">
            <ArrowLeft size={13} aria-hidden="true" /> Back to all writing
          </Link>
        </div>
      </div>
    </main>
  );
}
