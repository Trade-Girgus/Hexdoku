import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteDescription =
  "HexDoku is a logic puzzle on a hexagonal board. Find every crystal using four simple rules and no guessing.";
const siteUrl = process.env.PAGES_BASE_PATH
  ? "https://trade-girgus.github.io/Hexdoku"
  : "https://hexdoku-game.girgust1.chatgpt.site";
const assetPrefix = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HexDoku | Hex Logic Puzzle",
    template: "%s | HexDoku",
  },
  description: siteDescription,
  keywords: [
    "HexDoku",
    "hex puzzle",
    "logic game",
    "iPhone puzzle game",
    "Sudoku alternative",
    "deduction game",
  ],
  authors: [{ name: "Trade's Arcade" }],
  creator: "Trade's Arcade",
  icons: {
    icon: `${assetPrefix}/hexdoku-icon.png`,
    apple: `${assetPrefix}/hexdoku-icon.png`,
  },
  openGraph: {
    type: "website",
    title: "HexDoku | Hex Logic Puzzle",
    description: siteDescription,
    siteName: "HexDoku",
    images: [
      {
        url: "/hexdoku-icon.png",
        width: 1024,
        height: 1024,
        alt: "HexDoku app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HexDoku | Hex Logic Puzzle",
    description: siteDescription,
    images: ["/hexdoku-icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090612",
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
