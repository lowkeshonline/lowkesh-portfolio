import Link from "next/link";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href="/" aria-label="Lokesh home">lokesh<span>.</span></Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#education">Education</Link>
          <Link href="/#uses">Skills</Link>
          <Link href="/#writing">Writing</Link>
        </nav>
        <CommandPalette />
      </div>
    </header>
  );
}
