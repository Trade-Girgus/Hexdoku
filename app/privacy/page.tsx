import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How HexDoku handles game progress, analytics, diagnostics, Game Center, purchases, website data, and support messages.",
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
            HexDoku collects only the information needed to save your progress,
            improve the game, process purchases, operate leaderboards, and fix
            technical problems.
          </p>
        </div>
      </div>

      <article className="document-content">
        <p className="last-updated">Last updated October 13, 2026</p>

        <h2>Overview</h2>
        <p>
          This Privacy Policy explains how HexDoku handles information when you
          use the HexDoku app or website. HexDoku does not require you to create
          a HexDoku account. We do not sell your personal information or use
          your game activity for personalized advertising.
        </p>

        <h2>Information stored on your device</h2>
        <p>
          HexDoku stores game information locally so that you can continue
          playing where you stopped. This may include your current puzzle,
          placed crystals and X marks, score, lives, Stardust balance, streaks,
          milestones, tutorial progress, completed levels, campaign progress,
          puzzle results, and purchase entitlements.
        </p>
        <p>
          This information normally remains on your device. Deleting HexDoku
          generally removes locally stored game information, although some
          information may remain in device backups or be restored by Apple.
          Game Center records and App Store purchase history are managed
          separately by Apple.
        </p>

        <h2>Analytics and game activity</h2>
        <p>
          HexDoku uses Google Firebase Analytics to understand how the game is
          used and where it can be improved. Firebase may collect a
          pseudonymous app-installation identifier along with information such
          as app opens, sessions, engagement time, app version, device model,
          operating system, language, and general geographic region.
        </p>
        <p>
          HexDoku also records gameplay events such as tutorial progress,
          campaign and level number, puzzle size and difficulty, level results,
          completion time, score, mistakes, hints and reveals used, Stardust
          activity, milestone claims, store interactions, paywall interactions,
          and purchase results.
        </p>
        <p>
          These analytics events are not intended to contain your name, email
          address, contacts, or the contents of support messages.
        </p>

        <h2>Crash reports and diagnostics</h2>
        <p>
          HexDoku uses Firebase Crashlytics to identify crashes and other
          technical problems. Diagnostic reports may include stack traces,
          error details, app and operating-system versions, device model,
          installation identifiers, and relevant app or gameplay state from
          around the time of the problem.
        </p>
        <p>
          This information helps diagnose bugs, improve stability, and
          understand what happened before an error occurred.
        </p>

        <h2>BigQuery and the HexDoku dashboard</h2>
        <p>
          Firebase Analytics and Crashlytics information may be exported to
          Google BigQuery and summarized in a private HexDoku administration
          dashboard. This allows us to review game progression, level
          difficulty, retention, purchases, and technical reliability.
        </p>
        <p>
          Access to the dashboard and its underlying data is restricted and is
          used only to operate, understand, and improve HexDoku.
        </p>

        <h2>Game Center</h2>
        <p>
          HexDoku supports Apple Game Center for leaderboards and achievements.
          If you use these features, HexDoku may access information Apple makes
          available through Game Center, including your Game Center player
          identifier, display name, profile image, leaderboard score, rank, and
          achievement progress.
        </p>
        <p>
          HexDoku may submit your lifetime game score and achievement progress
          to Game Center. Apple manages your Game Center account and controls
          how Game Center information is stored and shared.
        </p>

        <h2>Purchases and Stardust</h2>
        <p>
          In-app purchases are processed by Apple through StoreKit. HexDoku
          does not receive or store your payment-card or billing information.
          Apple provides the app with information needed to confirm a purchase,
          such as the product purchased, transaction status, transaction
          identifier, and entitlement status.
        </p>
        <p>
          HexDoku may store transaction identifiers on your device to prevent a
          Stardust purchase from being credited more than once. Purchase
          attempts, results, product identifiers, and verified transactions may
          also be recorded through Firebase Analytics.
        </p>

        <h2>Advertising</h2>
        <p>
          HexDoku does not currently display third-party advertising. Analytics
          advertising personalization is disabled, and HexDoku does not use
          your gameplay activity to build a profile for personalized ads.
        </p>

        <h2>Website information</h2>
        <p>
          The public HexDoku website does not intentionally use behavioral
          advertising trackers. Like most websites, its hosting provider may
          process basic technical information such as your IP address, browser
          type, device type, and request logs to deliver the website securely,
          prevent abuse, and maintain reliability.
        </p>

        <h2>Messages you send</h2>
        <p>
          If you send feedback, a privacy question, or a bug report by email,
          we receive the information you choose to include along with your
          email address. This information is used to respond to you, investigate
          the issue, and improve HexDoku. Please avoid including sensitive
          personal information in a message.
        </p>

        <h2>Service providers and disclosure</h2>
        <p>
          HexDoku relies on Google for Firebase Analytics, Crashlytics, and
          BigQuery, and on Apple for Game Center and App Store purchases. These
          companies process information according to their own terms and
          privacy policies.
        </p>
        <p>
          Information may also be disclosed when reasonably necessary to
          comply with law, protect users, prevent fraud or abuse, or protect the
          rights and security of HexDoku.
        </p>

        <h2>Data retention and your choices</h2>
        <p>
          Local game information remains on your device until it is deleted,
          reset, or removed with the app, subject to device backups. Analytics,
          diagnostic, and BigQuery information is retained according to our
          configured retention settings and the policies of the applicable
          service provider.
        </p>
        <p>
          You can choose not to use Game Center. You can manage Game Center,
          purchase history, and related Apple privacy settings through your
          Apple Account and device settings.
        </p>
        <p>
          Depending on where you live, you may have rights concerning your
          personal information. You may contact us using the address below.
          Because most HexDoku analytics information uses pseudonymous
          installation identifiers instead of an email address or HexDoku
          account, we may not always be able to connect an email request to a
          particular analytics record.
        </p>

        <h2>Data security</h2>
        <p>
          We use reasonable safeguards and limit access to private analytics
          and diagnostic information. However, no storage or transmission
          system can be guaranteed to be completely secure.
        </p>

        <h2>Future changes</h2>
        <p>
          This policy may be updated when HexDoku adds or changes features,
          services, or data practices. Material changes will be reflected on
          this page with a new revision date.
        </p>

        <h2>Additional provider information</h2>
        <p>
          You can learn more by reviewing the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Apple Privacy Policy
          </a>
          .
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
