import { ArrowUpRight } from "lucide-react";
import { achievements, education, experience, training } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section className="page container">
      <div className="page-intro">
        <span className="eyebrow">Experience</span>
        <h1>Where I've been building.</h1>
        <p>My professional journey, education, selected training, and recognition—kept concise so the work stays at the center.</p>
      </div>

      <div className="timeline">
        {experience.map((item, index) => (
          <div className="timeline-item" key={item.company}>
            <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-content">
              <div className="timeline-head">
                <div><h2>{item.role}</h2><span>{item.company} · {item.location}</span></div>
                <time>{item.period}</time>
              </div>
              <p>{item.summary}</p>
              <ul className="clean-list">{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="tag-row">{item.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="split-sections">
        <div>
          <SectionHeading eyebrow="Education" title="Academic foundation." />
          <div className="info-card education-card">
            <span className="card-label">{education.period}</span>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <strong className="gpa">{education.gpa}</strong>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Training" title="Continuous learning." />
          <div className="stacked-info">
            {training.map((item) => (
              <div className="compact-row" key={item.title}>
                <div><strong>{item.title}</strong><span>{item.detail}</span>{item.partner && <small>{item.partner}</small>}</div>
                <time>{item.period}</time>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="achievements-section">
        <SectionHeading eyebrow="Recognition" title="A few milestones." />
        <div className="achievement-grid">
          {achievements.map((item) => (
            <div className="achievement" key={item.title + item.year}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}