/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Clock3,
  Gem,
  Heart,
  Lightbulb,
  Save,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import { HeroBoard, RuleBoard } from "./components/HexArt";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const assetPrefix = process.env.PAGES_BASE_PATH ?? "";

const rules = [
  {
    number: "01",
    title: "One per ascending lane",
    description:
      "Each lane rising from left to right holds exactly one crystal.",
    kind: "ascending" as const,
  },
  {
    number: "02",
    title: "One per descending lane",
    description:
      "Each lane falling from left to right also holds exactly one crystal.",
    kind: "descending" as const,
  },
  {
    number: "03",
    title: "One per color",
    description:
      "Every color group needs one crystal, no matter its shape.",
    kind: "color" as const,
  },
  {
    number: "04",
    title: "No crystals touching",
    description:
      "A crystal blocks all six neighboring hexagons around it.",
    kind: "touching" as const,
  },
];

const faqs = [
  {
    question: "What kind of puzzle is HexDoku?",
    answer:
      "HexDoku is a handcrafted logic game played on a hexagonal board. You place one crystal in every ascending lane, descending lane, and color group while keeping crystals from touching.",
  },
  {
    question: "Do I need to guess?",
    answer:
      "No. Every puzzle is designed to be solved through deduction. Hints explain the reasoning behind a move instead of simply giving away the answer.",
  },
  {
    question: "How does scoring work?",
    answer:
      "Correct crystals build a Spellchain and award more points in sequence. A mistake costs a life and resets the chain, so careful solving earns the strongest score.",
  },
  {
    question: "Will my puzzle be saved?",
    answer:
      "Yes. Your current board and level results are saved on your device so you can leave and continue later.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <SiteHeader />
        <div className="hero-stars" aria-hidden="true" />
        <div className="shooting-star shooting-star-left" aria-hidden="true" />
        <div className="shooting-star shooting-star-right" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <WandSparkles size={15} aria-hidden="true" />
              A new logic ritual for iPhone
            </p>
            <h1>HexDoku</h1>
            <p className="hero-lede">
              Place luminous crystals. Read the crossing lanes. Master a
              handcrafted hex puzzle where every move has a reason.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#how-to-play">
                Learn the rules
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Updates"
              >
                Follow development
              </a>
            </div>
            <div className="hero-note">
              <span className="status-light" aria-hidden="true" />
              In development by Trade&apos;s Arcade
            </div>
          </div>

          <div className="hero-game" aria-label="A preview of a HexDoku puzzle">
            <div className="game-hud">
              <div>
                <span>Level</span>
                <strong>12</strong>
              </div>
              <div>
                <span>Score</span>
                <strong>7,485</strong>
              </div>
              <div className="hud-crystals">
                <Gem size={18} aria-hidden="true" />
                <strong>7/11</strong>
              </div>
              <div className="hud-lives" aria-label="Three lives remaining">
                <Heart size={18} fill="currentColor" aria-hidden="true" />
                <Heart size={18} fill="currentColor" aria-hidden="true" />
                <Heart size={18} fill="currentColor" aria-hidden="true" />
              </div>
            </div>
            <HeroBoard />
          </div>
        </div>

        <a className="hero-next" href="#the-puzzle">
          <span>See how the spell works</span>
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>

      <section className="intro-band" id="the-puzzle">
        <div className="section-inner intro-grid">
          <div>
            <p className="section-kicker">Simple rules, deep deductions</p>
            <h2>Four laws. One perfect solution.</h2>
          </div>
          <p className="intro-copy">
            Sudoku discipline meets the geometry of a hex grid. Every crystal
            satisfies three overlapping groups at once, turning each placement
            into a small chain of discoveries.
          </p>
        </div>
      </section>

      <section className="rules-section" id="how-to-play">
        <div className="section-inner">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How to play</p>
              <h2>Read the board like a spellbook.</h2>
            </div>
            <p>
              Use X marks to rule out impossible spaces. When only one space
              remains in a lane or color, you have found the crystal.
            </p>
          </div>

          <div className="rule-grid">
            {rules.map((rule) => (
              <article className="rule-card" key={rule.kind}>
                <div className="rule-card-top">
                  <span>{rule.number}</span>
                  <RuleBoard kind={rule.kind} />
                </div>
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-inner feature-layout">
          <div className="app-art">
            <div className="icon-halo" aria-hidden="true" />
            <img
              src={`${assetPrefix}/hexdoku-icon.png`}
              alt="HexDoku app icon showing a crystal and X marks on a hex grid"
              width={1024}
              height={1024}
            />
          </div>

          <div className="feature-copy">
            <p className="section-kicker">Built for satisfying solves</p>
            <h2>Quiet strategy. A little bit of magic.</h2>
            <p className="feature-lede">
              HexDoku keeps the board calm and readable, then celebrates every
              breakthrough with crystal light, color, and tactile feedback.
            </p>

            <div className="feature-list">
              <div>
                <span className="feature-icon">
                  <Lightbulb size={20} aria-hidden="true" />
                </span>
                <p>
                  <strong>Reasoned hints</strong>
                  Learn why spaces can be eliminated or where a crystal belongs.
                </p>
              </div>
              <div>
                <span className="feature-icon">
                  <Zap size={20} aria-hidden="true" />
                </span>
                <p>
                  <strong>Spellchain scoring</strong>
                  Consecutive correct placements build toward a 10,000-point run.
                </p>
              </div>
              <div>
                <span className="feature-icon">
                  <Save size={20} aria-hidden="true" />
                </span>
                <p>
                  <strong>Progress that stays</strong>
                  Leave mid-puzzle and return to the exact board you were solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scoring-section">
        <div className="section-inner scoring-layout">
          <div className="scoring-copy">
            <p className="section-kicker">Build your Spellchain</p>
            <h2>Careful play becomes a stronger score.</h2>
            <p>
              Every correct crystal raises the reward. Keep the chain alive to
              reach the most valuable placements and finish the puzzle with all
              three stars.
            </p>
            <div className="score-meta">
              <div>
                <Heart size={18} fill="currentColor" aria-hidden="true" />
                <span>Lives determine your star rating</span>
              </div>
              <div>
                <Clock3 size={18} aria-hidden="true" />
                <span>Best time and chain are saved</span>
              </div>
            </div>
          </div>

          <div className="score-rune" aria-label="Example score chain">
            <div className="score-step step-one">
              <span>2</span>
              <strong>+560</strong>
            </div>
            <div className="score-step step-two">
              <span>3</span>
              <strong>+645</strong>
            </div>
            <div className="score-step step-three">
              <span>4</span>
              <strong>+725</strong>
            </div>
            <div className="score-step step-four">
              <span>5</span>
              <strong>+805</strong>
            </div>
            <div className="score-burst" aria-hidden="true">
              <Sparkles size={28} />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-inner faq-layout">
          <div>
            <p className="section-kicker">Questions from the coven</p>
            <h2>Before you begin.</h2>
            <p className="faq-intro">
              HexDoku is still being crafted. Here is what the game is built to
              feel like when it reaches your phone.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="section-inner closing-inner">
          <img
            src={`${assetPrefix}/hexdoku-icon.png`}
            alt=""
            width={120}
            height={120}
            aria-hidden="true"
          />
          <div>
            <p className="section-kicker">The next puzzle is taking shape</p>
            <h2>Ready to enter the hex?</h2>
            <p>
              HexDoku is in active development. Send feedback, report an issue,
              or ask to hear when the first version is ready.
            </p>
          </div>
          <a
            className="button button-primary"
            href="mailto:tradesarcade@gmail.com?subject=HexDoku%20Feedback"
          >
            Contact the creator
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
