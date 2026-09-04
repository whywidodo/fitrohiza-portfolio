import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link to={`/projects/${project.slug}`} className={`project-card ${featured ? "featured" : ""}`}>
      <div className={`project-visual ${project.accent}`}>
        <span className="project-number">{project.number}</span>
        <span className="visual-label">{project.category}</span>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="visual-core">{project.title.split(" ")[0].slice(0, 2)}</div>
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="round-arrow"><ArrowUpRight size={17} /></span>
        </div>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.stack.slice(0, 4).map((item) => <span key={item} className="tag">{item}</span>)}
        </div>
      </div>
    </Link>
  );
}