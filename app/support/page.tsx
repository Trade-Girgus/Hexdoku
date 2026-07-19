import type { Metadata } from "next";
import {
  Bug,
  Lightbulb,
  Mail,
  MessageSquareText,
  RotateCcw,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with HexDoku, report a bug, or share feedback.",
};

export default function SupportPage() {
  return (
    <main className="document-page support-page">
      <div className="document-hero">
        <SiteHeader />
        <div className="document-heading">
          <span className="document-icon">
            <Lightbulb size={26} aria-hidden="true" />
          </span>
          <p className="section-kicker">Support and feedback</p>
          <h1>Need a little magic?</h1>
          <p>
            Get unstuck, report something strange, or help shape the next
            version of HexDoku.
          </p>
        </div>
      </div>

      <div className="support-content">
        <section className="support-actions" aria-label="Support options">
          <a
            className="support-card"
            href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Bug%20Report"
          >
            <Bug size={24} aria-hidden="true" />
            <h2>Report a bug</h2>
            <p>Tell us what happened and which device you were using.</p>
          </a>
          <a
            className="support-card"
            href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Feedback"
          >
            <MessageSquareText size={24} aria-hidden="true" />
            <h2>Share feedback</h2>
            <p>Send an idea, reaction, or suggestion for the game.</p>
          </a>
          <a
            className="support-card"
            href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Support"
          >
            <Mail size={24} aria-hidden="true" />
            <h2>Ask for help</h2>
            <p>Describe the issue and we will help you work through it.</p>
          </a>
        </section>

        <section className="support-faq">
          <div>
            <p className="section-kicker">Quick answers</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>How do I continue an unfinished puzzle?</summary>
              <p>
                Open HexDoku again and choose the current level. Your board is
                saved automatically on your device.
              </p>
            </details>
            <details>
              <summary>Why did my Spellchain reset?</summary>
              <p>
                A wrong placement costs one life and resets the score chain. The
                next correct crystal starts building it again.
              </p>
            </details>
            <details>
              <summary>What should I include in a bug report?</summary>
              <p>
                Include your iPhone model, iOS version, level number, what you
                expected, and what happened. A screenshot is helpful when
                available.
              </p>
            </details>
            <details>
              <summary>Can I restart a puzzle?</summary>
              <p>
                Use the refresh control in the game to begin the current board
                again. Completed level records remain available to the game.
              </p>
            </details>
          </div>
        </section>

        <section className="support-note">
          <RotateCcw size={24} aria-hidden="true" />
          <div>
            <h2>Before reporting a display issue</h2>
            <p>
              Close and reopen the app once. If the issue returns, send the level
              number and a screenshot to{" "}
              <a href="mailto:tradesarcade@gmail.com">
                tradesarcade@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
