import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How HexDoku handles game progress, analytics, diagnostics, Game Center, purchases, website data, and support messages.",
};

export default function PrivacyPage() {
  return (
    <main className="document-page">
      <SiteHeader />

      <article className="document-content">
        <p className="eyebrow">Privacy policy</p>
        <h1>Your privacy in HexDoku</h1>
        <p className="document-lede">
          HexDoku collects only the information needed to save your progress,
          improve the game, process purchases, operate leaderboards, and fix
          technical problems.
        </p>
        <p className="last-updated">Last updated October 13, 2026</p>

        <h2>Overview</h2>
        <p>
          This policy explains how HexDoku handles information when you use the
          app or website. HexDoku does not require a separate account. We do not
          sell your personal information or use your game activity for
          personalized advertising.
        </p>

        <h2>Information stored on your device</h2>
        <p>
          HexDoku stores game information locally so you can continue where you
          stopped. This may include your current puzzle, placed crystals and X
          marks, score, lives, Stardust balance, streaks, milestones, tutorial
          progress, completed levels, campaign progress, puzzle results, and
          purchase entitlements.
        </p>
        <p>
          This information normally remains on your device. Deleting HexDoku
          generally removes locally stored game information, although some data
          may remain in device backups or be restored by Apple. Game Center
          records and App Store purchase history are managed separately by Apple.
        </p>

        <h2>Analytics and game activity</h2>
        <p>
          HexDoku uses Google Firebase Analytics to understand how the game is
          used and where it can be improved. Firebase may collect a pseudonymous
          app-installation identifier along with app opens, sessions, engagement
          time, app version, device model, operating system, language, and general
          geographic region.
        </p>
        <p>
          HexDoku also records gameplay events such as tutorial progress,
          campaign and level number, puzzle size and difficulty, level results,
          completion time, score, mistakes, hints and reveals used, Stardust
          activity, milestone claims, store and paywall interactions, and
          purchase results. These events are not intended to contain your name,
          email address, contacts, or the contents of support messages.
        </p>

        <h2>Crash reports and diagnostics</h2>
        <p>
          HexDoku uses Firebase Crashlytics to identify crashes and technical
          problems. Diagnostic reports may include stack traces, error details,
          app and operating-system versions, device model, installation
          identifiers, and relevant app or gameplay state from around the time
          of a problem.
        </p>

        <h2>BigQuery and the private dashboard</h2>
        <p>
          Firebase Analytics and Crashlytics information may be exported to
          Google BigQuery and summarized in a private HexDoku administration
          dashboard. This lets us review game progression, level difficulty,
          retention, purchases, and technical reliability. Access is restricted
          and used only to operate, understand, and improve HexDoku.
        </p>

        <h2>Game Center</h2>
        <p>
          HexDoku supports Apple Game Center for leaderboards and achievements.
          If you use these features, HexDoku may access information Apple makes
          available through Game Center, including your player identifier,
          display name, profile image, leaderboard score, rank, and achievement
          progress. HexDoku may submit your lifetime score and achievement
          progress to Game Center. Apple manages your Game Center account.
        </p>

        <h2>Purchases and Stardust</h2>
        <p>
          In-app purchases are processed by Apple through StoreKit. HexDoku does
          not receive or store your payment-card or billing information. Apple
          provides the app with information needed to confirm a purchase, such
          as product, transaction status, transaction identifier, and entitlement
          status.
        </p>
        <p>
          HexDoku may store transaction identifiers on your device to prevent a
          Stardust purchase from being credited more than once. Purchase attempts,
          results, product identifiers, and verified transactions may also be
          recorded through Firebase Analytics.
        </p>

        <h2>Advertising</h2>
        <p>
          HexDoku does not currently display third-party advertising. Analytics
          advertising personalization is disabled, and HexDoku does not use your
          gameplay activity to build a profile for personalized ads.
        </p>

        <h2>Website information</h2>
        <p>
          The public HexDoku website does not intentionally use behavioral
          advertising trackers. Its hosting provider may process basic technical
          information such as IP address, browser and device type, and request
          logs to deliver the site securely, prevent abuse, and maintain reliability.
        </p>

        <h2>Messages you send</h2>
        <p>
          If you send feedback, a privacy question, or a bug report by email, we
          receive the information you choose to include along with your email
          address. We use it to respond, investigate the issue, and improve
          HexDoku. Please avoid including sensitive personal information.
        </p>

        <h2>Service providers and disclosure</h2>
        <p>
          HexDoku relies on Google for Firebase Analytics, Crashlytics, and
          BigQuery, and on Apple for Game Center and App Store purchases. These
          companies process information according to their own terms and privacy
          policies. Information may also be disclosed when reasonably necessary
          to comply with law, prevent fraud or abuse, or protect users and HexDoku.
        </p>

        <h2>Data retention and your choices</h2>
        <p>
          Local game information remains on your device until it is deleted or
          removed with the app, subject to device backups. Analytics, diagnostic,
          and BigQuery information is retained according to our configured
          retention settings and the applicable provider&apos;s policies.
        </p>
        <p>
          You can choose not to use Game Center. You can manage Game Center,
          purchase history, and related Apple privacy settings through your Apple
          Account and device settings. Depending on where you live, you may have
          rights concerning your personal information and may contact us below.
          Because analytics uses pseudonymous installation identifiers rather
          than a HexDoku account, we may not always be able to connect an email
          request to a particular analytics record.
        </p>

        <h2>Data security</h2>
        <p>
          We use reasonable safeguards and limit access to private analytics and
          diagnostic information. No storage or transmission system can be
          guaranteed to be completely secure.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when HexDoku adds or changes features,
          services, or data practices. The revision date above will show when it
          was last updated.
        </p>

        <h2>Provider information</h2>
        <p>
          Learn more in the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google Privacy Policy
          </a>{" "}
          and the{" "}
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
            Apple Privacy Policy
          </a>
          .
        </p>

        <div className="document-contact">
          <Mail size={21} aria-hidden="true" />
          <div>
            <strong>Privacy questions</strong>
            <a href="mailto:hexdoku@gmail.com?subject=HexDoku%20Privacy">
              hexdoku@gmail.com
            </a>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
