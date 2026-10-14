/* eslint-disable @next/next/no-img-element */
import { ArrowDown, ArrowUpRight, Check, Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const assetPrefix = process.env.PAGES_BASE_PATH ?? "";

const rules = [
  {
    number: "01",
    title: "One crystal in every rising lane",
    description: "Follow each diagonal lane that rises across the board.",
  },
  {
    number: "02",
    title: "One crystal in every falling lane",
    description: "Do the same for every diagonal lane in the other direction.",
  },
  {
    number: "03",
    title: "One crystal in every color",
    description: "Each color group contains exactly one crystal.",
  },
  {
    number: "04",
    title: "Crystals cannot touch",
    description: "Not even across an edge. Use X marks to rule spaces out.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-icon-wrap">
          <img
            className="hero-icon"
            src={`${assetPrefix}/hexdoku-icon.png`}
            alt="HexDoku app icon"
            width={1024}
            height={1024}
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">A logic puzzle for iPhone</p>
          <h1 id="hero-title">HexDoku</h1>
          <p className="hero-tagline">Find every crystal. Never guess.</p>
          <p className="hero-description">
            Read crossing lanes and color groups on a hexagonal board. Every
            puzzle has one logical solution.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://apps.apple.com/app/id6792410570"
              target="_blank"
              rel="noreferrer"
            >
              View on the App Store
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#how-to-play">
              Learn the rules
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <p className="campaign-note">
            Three campaigns let you choose a small, medium, or large board.
          </p>
        </div>
      </section>

      <section className="rules-section" id="how-to-play">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How to play</p>
            <h2>Four rules. That&apos;s it.</h2>
            <p>
              Place crystals where they must go. Mark every impossible space
              with an X until the whole board is solved.
            </p>
          </div>

          <div className="rule-list">
            {rules.map((rule) => (
              <article className="rule-card" key={rule.number}>
                <span className="rule-number">{rule.number}</span>
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.description}</p>
                </div>
                <Check className="rule-check" size={20} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-card">
          <p className="eyebrow">Ready to solve?</p>
          <h2>Start with the tutorial. Let logic do the rest.</h2>
          <a href="mailto:hexdoku@gmail.com?subject=HexDoku%20Question">
            <Mail size={18} aria-hidden="true" />
            hexdoku@gmail.com
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
