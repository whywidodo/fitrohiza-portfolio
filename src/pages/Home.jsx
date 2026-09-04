import { ArrowDown, ArrowUpRight, Check, Code2, Layers3, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, projects, experience, skills } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const groups = [...new Set(skills.map((s) => s.group))];

  return (
    <>
      <section className="hero container">
        <div className="hero-kicker"><span className="status-dot" /> Available for selected opportunities</div>
        <div className="hero-grid">
          <div>
            <h1>{profile.headline}</h1>
            <p className="hero-copy">{profile.intro}</p>
            <div className="hero-actions">
              <Link className="button primary" to="/projects">Explore my work <ArrowUpRight size={16} /></Link>
              <Link className="button secondary" to="/contact">Get in touch</Link>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-label">Currently focused on</span>
            <strong>Flutter product development</strong>
            <p>Interfaces, API integrations, state management, and the small details that turn features into dependable experiences.</p>
          </div>
        </div>
        <div className="scroll-cue"><ArrowDown size={15} /> Scroll to explore</div>
      </section>

      <section className="statement-section">
        <div className="container statement">
          <span className="eyebrow">A little about my work</span>
          <p>I like building mobile products that feel <em>simple on the surface</em> while being thoughtfully engineered underneath.</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with real product thinking."
          description="A curated selection of mobile work across healthcare, community, commerce, and service platforms."
          action={<Link className="text-link" to="/projects">View all projects <ArrowUpRight size={15} /></Link>}
        />
        <div className="project-grid">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="From requirements to release." description="Hands-on experience across production mobile applications and collaborative product teams." />
          <div className="experience-preview">
            {experience.map((item) => (
              <div className="experience-row" key={item.company}>
                <div className="experience-year">{item.period}</div>
                <div className="experience-main">
                  <div className="experience-title"><h3>{item.role}</h3><span>{item.company}</span></div>
                  <p>{item.summary}</p>
                  <div className="tag-row">{item.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          <Link className="text-link experience-link" to="/experience">See full experience <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="Capabilities" title="A focused mobile toolkit." description="Tools and practices I use to move from idea to polished mobile experience." />
        <div className="capability-grid">
          <div className="capability-card">
            <div className="capability-icon"><Smartphone size={20} /></div>
            <h3>Mobile</h3>
            <p>Cross-platform and native development with a focus on maintainable, responsive interfaces.</p>
            <div className="skill-list">{skills.filter(s => s.group === "Mobile").map(s => <span key={s.label}><Check size={13} />{s.label}</span>)}</div>
          </div>
          <div className="capability-card">
            <div className="capability-icon"><Layers3 size={20} /></div>
            <h3>Architecture</h3>
            <p>Practical state management and architecture patterns chosen around product complexity.</p>
            <div className="skill-list">{skills.filter(s => s.group === "Architecture").map(s => <span key={s.label}><Check size={13} />{s.label}</span>)}</div>
          </div>
          <div className="capability-card">
            <div className="capability-icon"><Code2 size={20} /></div>
            <h3>Integration</h3>
            <p>Connecting mobile experiences to reliable APIs and real-time services.</p>
            <div className="skill-list">{skills.filter(s => s.group === "Integration").map(s => <span key={s.label}><Check size={13} />{s.label}</span>)}</div>
          </div>
        </div>
        <div className="home-metrics">
          <div><strong>3.96</strong><span>GPA / 4.00</span></div>
          <div><strong>4+</strong><span>Product domains</span></div>
          <div><strong>Flutter</strong><span>Primary stack</span></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta">
          <div>
            <span className="eyebrow">Have something in mind?</span>
            <h2>Let's build something useful.</h2>
          </div>
          <Link className="button primary" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}