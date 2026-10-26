import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects as allProjects, type Project } from "../_data/projects";

export default function WorkList({ items = allProjects }: { items?: Project[] }) {
  return (
    <div className="work-list">
      {items.map((project, index) => (
        <article className="work-row" key={project.id}>
          <span className="work-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="work-main">
            <div className="work-top">
              <h3 className="work-title">{project.title}</h3>
              <span className={`status ${project.status === "live" ? "status-live" : "status-progress"}`}>
                <span className="status-dot" aria-hidden="true" />
                {project.status === "live" ? "Live" : "In progress"}
              </span>
              <span className="work-year">{project.year}</span>
            </div>
            <p className="work-desc">{project.description}</p>
            <ul className="work-stack" aria-label={`${project.title} technologies`}>
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="work-links">
            {project.liveUrl ? (
              <a
                className="work-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site (opens in a new tab)`}
              >
                Live <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : null}
            <a
              className="work-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code (opens in a new tab)`}
            >
              Code <FaGithub size={13} aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
