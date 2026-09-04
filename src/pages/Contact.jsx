import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="contact-page container">
      <div className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h1>Let's make something <em>worth using.</em></h1>
        <p>If you have a product, mobile feature, or collaboration in mind, I'd be happy to hear about it.</p>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span className="contact-icon"><Mail size={20} /></span>
          <div><span className="aside-label">Email</span><strong>{profile.email}</strong></div>
          <ArrowUpRight size={18} />
        </a>
        <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-icon"><Linkedin size={20} /></span>
          <div><span className="aside-label">LinkedIn</span><strong>/in/fitrohiza</strong></div>
          <ArrowUpRight size={18} />
        </a>
        <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <span className="contact-icon"><Github size={20} /></span>
          <div><span className="aside-label">GitHub</span><strong>@fitrohiza</strong></div>
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="contact-note">
        <span className="status-dot" /> Open to meaningful mobile product opportunities.
      </div>
    </section>
  );
}