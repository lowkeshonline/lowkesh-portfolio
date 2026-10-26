import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { profile } from "../_data/profile";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <p className="footer-kicker">
            <span>08</span> · CONTACT
          </p>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>

        <Link className="footer-wordmark" href="/#top" aria-label="Back to top">
          Lokesh<span>.</span>
        </Link>

        <p className="footer-motto">Learn · Build · Ship</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} — by {profile.name}
        </p>

        <div className="footer-rule" aria-hidden="true" />
      </div>
    </footer>
  );
}
