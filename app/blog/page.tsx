import Link from "next/link";
import { getAllPosts } from "../_utils/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Lokesh.OS",
  description:
    "Thoughts, tutorials, and deep dives into software engineering, architecture, and design by Lokesh.",
  openGraph: {
    title: "System Logs | Lokesh.OS",
    description:
      "Thoughts, tutorials, and deep dives into software engineering, architecture, and design by Lokesh.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="flex-1 flex flex-col relative px-5 lg:px-16 w-full max-w-[1440px] mx-auto py-12">
      <div className="w-full flex flex-col gap-4 mb-16 mt-8">
        <p className="text-[11px] font-jetbrains-mono font-bold tracking-widest text-aqua-glow uppercase">
          <span className="mr-2">{">"}</span> System Logs
        </p>
        <h1 className="text-[56px] font-instrument-serif leading-[110%] text-on-background">
          Blogs
        </h1>
        <p className="text-[14px] font-jetbrains-mono text-on-surface-variant max-w-2xl mt-4">
          Thoughts, tutorials, and deep dives into software engineering,
          architecture, and design.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full mb-24 lg:w-3/4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <div className="terminal-border surface-level-1 p-8 flex flex-col gap-4 hover:border-aqua-glow transition-colors duration-300">
              <span className="text-[11px] font-jetbrains-mono tracking-widest text-on-surface-variant uppercase">
                {post.frontmatter.date}
              </span>
              <h2 className="text-[28px] font-instrument-serif text-aqua-glow leading-none group-hover:text-aqua-hover transition-colors">
                {post.frontmatter.title}
              </h2>
              <p className="text-[13px] font-jetbrains-mono text-on-surface-variant leading-relaxed">
                {post.frontmatter.summary}
              </p>

              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-dim">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-jetbrains-mono tracking-widest uppercase px-2 py-1 border border-border-dim text-on-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
