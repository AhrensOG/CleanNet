export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://www.clean-net.ch/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
