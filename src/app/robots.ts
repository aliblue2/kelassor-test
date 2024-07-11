import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/","/bootcamp"],
      disallow: "/user-panel/",
    },
    sitemap: "https://kelaasor.ir/sitemap.xml",
  };
}
