import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { projects } from "../_data/projects";
import WorkList from "../_components/WorkList";

export const metadata: Metadata = {
  title: "Work | Lokesh Chonga",
  description: "Selected software projects built by Lokesh Chonga.",
  openGraph: {
    title: "Work | Lokesh Chonga",
    description: "Selected software projects built by Lokesh Chonga.",
    type: "website",
  },
};

export default function Projects() {
  return (
    <main className="site-main page" id="main-content">
      <div className="container">
        <Link href="/#work" className="page-back">
          <ArrowLeft size={13} aria-hidden="true" /> Back to home
        </Link>

        <header className="page-header">
          <p className="page-kicker">
            <span>01</span> · Work / All
          </p>
          <h1>
            All projects<span>.</span>
          </h1>
          <p>
            Three projects I&apos;ve shipped and still care about — built for real
            users, with the source open.
          </p>
        </header>

        {projects.length ? (
          <WorkList />
        ) : (
          <p className="empty-state">Projects will appear here as they ship.</p>
        )}
      </div>
    </main>
  );
}
