import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-screen py-8 border-t border-border-dim flex justify-center">
        <div className="w-3/4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-jetbrains-mono tracking-widest text-on-surface-variant uppercase">
              Lokesh.OS // Terminal Edition
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/lowkeshonline"
              className="text-on-surface-variant hover:text-aqua-hover transition-colors flex items-center"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/lowkeshonline/"
              className="text-on-surface-variant hover:text-aqua-hover transition-colors flex items-center"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/lowkeshonline"
              className="text-on-surface-variant hover:text-aqua-hover transition-colors flex items-center"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
