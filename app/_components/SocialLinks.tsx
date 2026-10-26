import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { profile } from "../_data/profile";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a className="social-link" href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`} title="Email">
        <Mail size={15} aria-hidden="true" />
      </a>
      <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)" title="GitHub">
        <FaGithub size={15} aria-hidden="true" />
      </a>
      <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
        <FaLinkedinIn size={14} aria-hidden="true" />
      </a>
      <a className="social-link" href={profile.x} target="_blank" rel="noreferrer" aria-label="X (opens in a new tab)" title="X">
        <FaXTwitter size={14} aria-hidden="true" />
      </a>
    </div>
  );
}
