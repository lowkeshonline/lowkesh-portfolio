import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link className="footer-mark" href="/">
          Lokesh<span>.</span>
        </Link>
        <p>Building useful things, one project at a time.</p>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Lokesh
        </span>
        <Link className="back-to-top" href="/#top">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
