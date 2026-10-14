/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const assetPrefix = process.env.PAGES_BASE_PATH ?? "";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="HexDoku home">
        <img
          src={`${assetPrefix}/hexdoku-icon.png`}
          alt=""
          width={44}
          height={44}
          aria-hidden="true"
        />
        <span>HexDoku</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#how-to-play">How to play</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© 2026 Trade&apos;s Arcade</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <a href="mailto:hexdoku@gmail.com">hexdoku@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
