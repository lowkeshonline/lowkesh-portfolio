import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { formatPostDate, getAllPosts, readingTime } from "../_utils/mdx";

export const metadata: Metadata = {
  title: "Writing | Lokesh Chonga",
  description: "Notes from building, debugging, and learning in public.",
  openGraph: {
    title: "Writing | Lokesh Chonga",
    description: "Notes from building, debugging, and learning in public.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const count = String(posts.length).padStart(2, "0");

  return (
    <main className="site-main page" id="main-content">
      <div className="container">
        <Link href="/#writing" className="page-back">
          <ArrowLeft size={13} aria-hidden="true" /> Back to home
        </Link>

        <header className="page-header">
          <p className="page-kicker">
            <span>06</span> · Writing / All
          </p>
          <h1>
            All writing<span>.</span>
          </h1>
          <p>
            Notes from building, debugging, and learning in public. {count}{" "}
            {posts.length === 1 ? "post" : "posts"} so far.
          </p>
        </header>

        {posts.length ? (
          <div className="writing-list">
            {posts.map((post) => (
              <Link className="writing-row" href={`/blog/${post.slug}`} key={post.slug}>
                <span className="writing-date">{formatPostDate(post.frontmatter.date)}</span>
                <div className="writing-main">
                  <h2>{post.frontmatter.title}</h2>
                  <p>{post.frontmatter.summary}</p>
                </div>
                <span className="writing-meta">
                  {readingTime(post.content)} min <ArrowUpRight size={12} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="empty-state">No notes published yet.</p>
        )}
      </div>
    </main>
  );
}
