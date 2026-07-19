import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteDescription =
  "HexDoku is a spellbinding hex logic game. Place one crystal in every ascending lane, descending lane, and color group without letting crystals touch.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hexdoku-game.girgust1.chatgpt.site"),
  title: {
    default: "HexDoku | A Spellbinding Hex Puzzle",
    template: "%s | HexDoku",
  },
  description: siteDescription,
  keywords: [
    "HexDoku",
    "hex puzzle",
    "logic game",
    "iPhone puzzle game",
    "Sudoku alternative",
    "witchy game",
  ],
  authors: [{ name: "Trade's Arcade" }],
  creator: "Trade's Arcade",
  icons: {
    icon: "/hexdoku-icon.png",
    apple: "/hexdoku-icon.png",
  },
  openGraph: {
    type: "website",
    title: "HexDoku | A Spellbinding Hex Puzzle",
    description: siteDescription,
    siteName: "HexDoku",
    images: [
      {
        url: "/og.png",
        width: 1743,
        height: 909,
        alt: "A colorful HexDoku board with glowing crystals and white X marks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HexDoku | A Spellbinding Hex Puzzle",
    description: siteDescription,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#120b2e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
