import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/support"];
  const siteUrl = process.env.PAGES_BASE_PATH
    ? "https://trade-girgus.github.io/Hexdoku"
    : "https://hexdoku-game.girgust1.chatgpt.site";

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
