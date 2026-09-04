import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Fitroh Izatul Malkiyah</div>
          <p className="muted footer-copy">Mobile Developer · Flutter · Kotlin</p>
        </div>

        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Fitroh Izatul Malkiyah</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  );
}