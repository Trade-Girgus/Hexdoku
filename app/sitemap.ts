import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/support"];

  return routes.map((route) => ({
    url: `https://hexdoku-game.girgust1.chatgpt.site${route}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
