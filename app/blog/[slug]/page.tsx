import { getPostBySlug, getPostSlugs } from "../../_utils/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "../../_components/MDXComponents";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.frontmatter.title} | Lokesh.OS`,
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

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  return (
    <main className="flex-1 flex flex-col relative px-5 lg:px-16 w-full max-w-[1000px] mx-auto py-12 mb-24">
      {/* Back Button */}
      <Link
        href="/blog"
        className="text-[11px] font-jetbrains-mono tracking-widest text-aqua-glow uppercase mb-12 hover:text-aqua-hover transition-colors inline-block w-fit"
      >
        <span className="mr-2">{"<"}</span> RETURN_TO_LOGS
      </Link>

      {/* Header */}
      <header className="mb-12 border-b border-border-dim pb-8">
        <h1 className="text-[48px] md:text-[64px] font-instrument-serif leading-[105%] text-on-background mb-6">
          {post.frontmatter.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[13px] font-jetbrains-mono text-on-surface-variant">
          <span className="uppercase tracking-widest">
            {post.frontmatter.date}
          </span>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <>
              <span className="hidden sm:inline text-border-dim">|</span>
              <div className="flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-widest uppercase px-2 py-1 border border-border-dim text-on-background bg-level-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <article className="prose-none w-full max-w-none">
        <MDXRemote source={post.content} components={MDXComponents} />
      </article>
    </main>
  );
}
