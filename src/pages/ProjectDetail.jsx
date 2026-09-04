import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects } from "../data/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="page container not-found">
        <span className="eyebrow">Project</span>
        <h1>Project not found.</h1>
        <Link className="text-link" to="/projects"><ArrowLeft size={15} /> Back to projects</Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="container">
        <Link className="back-link" to="/projects"><ArrowLeft size={15} /> All projects</Link>
        <div className="detail-hero">
          <div>
            <span className="eyebrow">{project.category} · {project.year}</span>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
          <div className={`detail-visual ${project.accent}`}>
            <span>{project.number}</span>
            <div className="detail-core">{project.title.slice(0, 2).toUpperCase()}</div>
          </div>
        </div>

        <div className="detail-layout">
          <article>
            <div className="detail-section">
              <span className="eyebrow">Overview</span>
              <p className="detail-lead">{project.description}</p>
            </div>
            <div className="detail-section">
              <span className="eyebrow">What I worked on</span>
              <div className="detail-highlights">
                {project.highlights.map((item) => <div className="highlight" key={item}><Check size={15} /><span>{item}</span></div>)}
              </div>
            </div>
          </article>

          <aside className="detail-aside">
            <div className="aside-block">
              <span className="aside-label">Role</span>
              <strong>{project.role}</strong>
            </div>
            <div className="aside-block">
              <span className="aside-label">Stack</span>
              <div className="tag-row">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </div>
            <div className="aside-block">
              <span className="aside-label">Next</span>
              <Link className="text-link" to="/contact">Discuss a project <ArrowUpRight size={15} /></Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}