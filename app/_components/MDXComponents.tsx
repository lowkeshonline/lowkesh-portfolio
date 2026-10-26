import Link from "next/link";
import type { ReactNode } from "react";

export const MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => <h1>{children}</h1>,
  h2: ({ children }: { children: ReactNode }) => <h2>{children}</h2>,
  h3: ({ children }: { children: ReactNode }) => <h3>{children}</h3>,
  p: ({ children }: { children: ReactNode }) => <p>{children}</p>,
  ul: ({ children }: { children: ReactNode }) => <ul>{children}</ul>,
  ol: ({ children }: { children: ReactNode }) => <ol>{children}</ol>,
  li: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => <blockquote>{children}</blockquote>,
  a: ({ href, children }: { href?: string; children: ReactNode }) => {
    if (href && (href.startsWith("/") || href.startsWith("#"))) {
      return <Link href={href}>{children}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
  },
  pre: ({ children }: { children: ReactNode }) => <pre>{children}</pre>,
  code: ({ children }: { children: ReactNode }) => <code>{children}</code>,
};
