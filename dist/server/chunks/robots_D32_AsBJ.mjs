async function GET() {
  const baseUrl = "https://rafiq.biz.id";
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
