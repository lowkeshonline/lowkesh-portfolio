import Link from "next/link";
import { ReactNode } from "react";

export const MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-[42px] font-instrument-serif leading-[110%] text-on-background mt-12 mb-6 border-b border-border-dim pb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-[28px] font-instrument-serif text-aqua-glow mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-[20px] font-jetbrains-mono font-bold text-on-surface-variant uppercase mt-8 mb-4">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-[14px] font-jetbrains-mono text-on-surface-variant leading-relaxed mb-6">
      {children}
    </p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside text-[13px] font-jetbrains-mono text-on-surface-variant flex flex-col gap-2 mb-6">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside text-[13px] font-jetbrains-mono text-on-surface-variant flex flex-col gap-2 mb-6">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-2 border-aqua-glow surface-level-1 p-6 my-8 italic text-on-background terminal-border">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-aqua-glow hover:text-aqua-hover transition-colors underline underline-offset-4"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-aqua-glow hover:text-aqua-hover transition-colors underline underline-offset-4"
      >
        {children}
      </a>
    );
  },
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="surface-level-1 p-4 overflow-x-auto terminal-border mb-8 mt-4 text-[13px] font-jetbrains-mono text-on-surface-variant">
      {children}
    </pre>
  ),
  code: ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => {
    return (
      <code
        className={`${
          className || ""
        } bg-level-2 px-1 py-0.5 rounded-none border-border-dim text-[12px] font-jetbrains-mono text-primary-fixed-dim`}
      >
        {children}
      </code>
    );
  },
};
