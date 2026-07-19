import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How HexDoku handles game progress, website data, and support messages.",
};

export default function PrivacyPage() {
  return (
    <main className="document-page">
      <div className="document-hero">
        <SiteHeader />
        <div className="document-heading">
          <span className="document-icon">
            <ShieldCheck size={26} aria-hidden="true" />
          </span>
          <p className="section-kicker">Plain-language privacy</p>
          <h1>Privacy at HexDoku</h1>
          <p>
            The game is designed to remember your puzzle, not collect a profile
            about you.
          </p>
        </div>
      </div>

      <article className="document-content">
        <p className="last-updated">Last updated July 18, 2026</p>

        <h2>Game progress</h2>
        <p>
          HexDoku stores your current puzzle and level results on your device.
          This can include placed crystals and X marks, score, remaining lives,
          best Spellchain, and completion time. This information is used to let
          you continue where you stopped and review your progress.
        </p>

        <h2>Accounts and advertising</h2>
        <p>
          The current version of HexDoku does not require an account. The
          website does not intentionally use advertising trackers or behavioral
          advertising.
        </p>

        <h2>Website hosting</h2>
        <p>
          Like most websites, the hosting provider may process basic technical
          information such as an IP address, browser type, and request logs to
          deliver the site securely and keep it reliable.
        </p>

        <h2>Messages you send</h2>
        <p>
          If you email feedback or a bug report, the message and reply address
          are used to respond and improve HexDoku. Please avoid including
          sensitive personal information in a report.
        </p>

        <h2>Future changes</h2>
        <p>
          New features may require this policy to be updated. Material changes
          will be reflected here with a new revision date.
        </p>

        <div className="document-contact">
          <Mail size={22} aria-hidden="true" />
          <div>
            <strong>Questions about privacy?</strong>
            <a href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Privacy">
              tradesarcade@gmail.com
            </a>
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
