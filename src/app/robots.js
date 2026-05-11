export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://am-vertex.vercel.app/sitemap.xml",
  };
}