/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { GitFork, Mail } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <img
          src="/hexdoku-icon.png"
          alt=""
          width={42}
          height={42}
          aria-hidden="true"
        />
        <span>HexDoku</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#how-to-play">How to play</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/support">Support</Link>
      </nav>
      <a
        className="header-github"
        href="https://github.com/Trade-Girgus/Hexdoku"
        target="_blank"
        rel="noreferrer"
        aria-label="View HexDoku on GitHub"
      >
        <GitFork size={20} aria-hidden="true" />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <Link className="brand footer-brand" href="/">
          <img
            src="/hexdoku-icon.png"
            alt=""
            width={38}
            height={38}
            aria-hidden="true"
          />
          <span>HexDoku</span>
        </Link>
        <p>A spellbinding hex logic game by Trade&apos;s Arcade.</p>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
          <a
            href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Feedback"
            aria-label="Email HexDoku support"
          >
            <Mail size={17} aria-hidden="true" />
            Feedback
          </a>
          <a
            href="https://github.com/Trade-Girgus/Hexdoku"
            target="_blank"
            rel="noreferrer"
            aria-label="HexDoku on GitHub"
          >
            <GitFork size={17} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
      <div className="section-inner footer-bottom">
        <span>© 2026 Trade&apos;s Arcade</span>
        <span>Made with logic, light, and a little magic.</span>
      </div>
    </footer>
  );
}
