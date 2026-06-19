// Resolves a post's optional cover image to a static asset URL.
//
// Lives under `src/app/blogs/` so the webpack dynamic-import context resolves
// to `blogs/*/cover.*` — the same context the `[slug]` route relies on, which
// is required for the static export to bundle the images. Reused by the blog
// list, the post page, and the home page so the resolution logic stays in one
// place.
//
// Image spec (static export does NOT optimise images): size covers to
// 1600×640 (2.5:1 banner), JPEG/WebP, target < 300 KB. See the post page for
// the full authoring/resize notes.
const COVER_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif", "gif"];

export async function getCoverSrc(slug: string): Promise<string | null> {
  for (const ext of COVER_EXTENSIONS) {
    try {
      return (await import(`./${slug}/cover.${ext}`)).default.src;
    } catch {
      // extension not present — try the next one
    }
  }
  return null;
}
