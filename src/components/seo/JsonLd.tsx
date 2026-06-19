// Renders a schema.org JSON-LD block. Server component — the script ships in the
// static HTML so crawlers read structured data without executing JS.
//
// `data` is a plain object shaped per schema.org. Stringified here; React does
// NOT escape script-tag content, so only pass trusted build-time data (never
// raw user input) to avoid breaking out of the <script>.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
