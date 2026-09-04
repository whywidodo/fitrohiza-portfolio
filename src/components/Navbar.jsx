import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/portfolio";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link className="brand" to="/">
          <span className="brand-mark">F</span>
          <span>{profile.shortName}</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <Link className="nav-contact" to="/contact">
            Let's talk <ArrowUpRight size={15} />
          </Link>
        </div>
      </nav>
    </header>
  );
}