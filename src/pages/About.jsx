import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, skills } from "../data/portfolio";

export default function About() {
  const groups = ["Mobile", "Architecture", "Integration", "Tools"];

  return (
    <section className="page container">
      <div className="page-intro">
        <span className="eyebrow">About</span>
        <h1>Design-minded. Product-focused. Mobile-first.</h1>
        <p>{profile.about}</p>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <div className="about-quote">
            <span>“</span>
            <p>Good mobile experiences should feel obvious to the person using them—and intentional to the person building them.</p>
          </div>
          <div className="prose">
            <p>I enjoy the space between design and engineering: understanding how a feature should behave, translating that into a clean interface, then making the underlying implementation dependable.</p>
            <p>My strongest experience is in Flutter, supported by a foundation in native Android development with Kotlin. I’m also comfortable integrating REST APIs, handling application state, working with real-time services, and collaborating through Git-based workflows.</p>
          </div>
        </div>

        <aside className="about-aside">
          <div className="profile-card">
            <span className="avatar-large">F</span>
            <h2>{profile.name}</h2>
            <p>{profile.role} · {profile.location}</p>
            <Link className="text-link" to="/contact">Get in touch <ArrowUpRight size={15} /></Link>
          </div>
        </aside>
      </div>

      <div className="skills-section">
        <div className="section-heading">
          <div><span className="eyebrow">Toolkit</span><h2>What I work with.</h2></div>
        </div>
        <div className="skills-matrix">
          {groups.map((group) => (
            <div className="skill-group" key={group}>
              <span className="aside-label">{group}</span>
              <div className="skill-pills">{skills.filter(s => s.group === group).map(s => <span key={s.label}><Check size={13} />{s.label}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}