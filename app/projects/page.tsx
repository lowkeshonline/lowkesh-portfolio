import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../_data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Archive | Lokesh.OS",
  description:
    "A collection of systems, applications, and experiments engineered by Lokesh — full-stack engineer.",
  openGraph: {
    title: "Project Archive | Lokesh.OS",
    description:
      "A collection of systems, applications, and experiments engineered by Lokesh — full-stack engineer.",
    type: "website",
  },
};


export default function Projects() {
  return (
    <main className="flex-1 flex flex-col relative px-5 lg:px-16 w-full max-w-[1440px] mx-auto py-12">
      <div className="w-full flex flex-col gap-4 mb-16 mt-8">
        <p className="text-[11px] font-jetbrains-mono font-bold tracking-widest text-aqua-glow uppercase">
          <span className="mr-2">{">"}</span> ARCHIVES
        </p>
        <h1 className="text-[56px] font-instrument-serif leading-[110%] text-on-background">
          Project Archive
        </h1>
        <p className="text-[14px] font-jetbrains-mono text-on-surface-variant max-w-2xl mt-4">
          A collection of systems, applications, and experiments engineered for
          scale and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-24">
        {projects.map((project) => (
          <div
            key={project.id}
            className="terminal-border surface-level-1 p-8 flex flex-col gap-6 hover:border-aqua-glow transition-colors duration-300 group"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-[28px] font-instrument-serif text-aqua-glow leading-none group-hover:text-aqua-hover transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="text-on-surface-variant hover:text-aqua-hover transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="text-on-surface-variant hover:text-aqua-hover transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={18} />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-[13px] font-jetbrains-mono text-on-surface-variant leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border-dim">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-jetbrains-mono tracking-widest uppercase px-2 py-1 border border-border-dim text-on-background"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
