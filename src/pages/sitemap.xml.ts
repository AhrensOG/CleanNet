const base = "https://www.clean-net.ch";

const routes = [
  "/fr",
  "/fr/services",
  "/fr/contact",
  "/en",
  "/en/services",
  "/en/contact",
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
    <url>
      <loc>${base}${route}</loc>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
