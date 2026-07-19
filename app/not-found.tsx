import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="lost-rune" aria-hidden="true">
        <span>?</span>
      </div>
      <p className="section-kicker">This lane leads nowhere</p>
      <h1>That page is outside the puzzle.</h1>
      <p>The link may have moved, or the spell may have been written wrong.</p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={18} aria-hidden="true" />
        Return to HexDoku
      </Link>
    </main>
  );
}
