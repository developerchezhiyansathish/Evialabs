import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/products",
  "/services",
  "/capabilities",
  "/blog",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://evialabs.in";

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
