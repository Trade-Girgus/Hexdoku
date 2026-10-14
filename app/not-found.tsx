import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page is not part of the puzzle.</h1>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={18} aria-hidden="true" />
        Back to HexDoku
      </Link>
    </main>
  );
}
