import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="page container">
      <div className="page-intro">
        <span className="eyebrow">Projects</span>
        <h1>Selected work.</h1>
        <p>A collection of mobile products and features spanning healthcare, community, commerce, and service experiences.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
      <div className="page-end-note">
        <span>More work can be shared on request.</span>
        <Link className="text-link" to="/contact">Let's talk <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}