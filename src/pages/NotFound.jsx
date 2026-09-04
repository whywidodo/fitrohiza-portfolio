import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page container not-found">
      <span className="eyebrow">404</span>
      <h1>That page doesn't exist.</h1>
      <p>Let's get you back to the portfolio.</p>
      <Link className="button secondary" to="/"><ArrowLeft size={15} /> Back home</Link>
    </section>
  );
}