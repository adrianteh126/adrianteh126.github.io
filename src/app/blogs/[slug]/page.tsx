import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blogs";
import { BlogPostHeader } from "@/components/blogs/BlogPostHeader";
import { getCoverSrc } from "@/app/blogs/covers";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, AUTHOR_NAME, OG_DEFAULT } from "@/lib/site";

// Static export: only pre-rendered slugs are valid; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const cover = await getCoverSrc(slug);
  const ogImage = cover ?? OG_DEFAULT;
  const url = `/blogs/${slug}/`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: SITE_NAME,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: ogImage, alt: `${post.title} cover` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { default: Content } = await import(`../${slug}/content.mdx`);

  // Cover image is per-post and optional — posts without a cover still build.
  // Drop a `cover.<ext>` in the post folder; the first matching extension wins.
  // Resolution is shared (see covers.ts) so the list, post, and home pages stay
  // in sync.
  //
  // Image spec: static export does NOT optimise images (images.unoptimized +
  // output: "export"), so the file ships as-is — size it before committing:
  //   - format: JPEG/WebP (photos) — far smaller than PNG; PNG only for flat/transparent art
  //   - layout: shown full-width (w-full) at NATURAL ratio (no crop) — the source ratio
  //             IS the display ratio, so a tall image makes a tall banner. Author wide.
  //   - size:   1600×640 (2.5:1 banner). Content column maxes at ~1504px, so 1600px
  //             wide is retina-sharp; 2.5:1 keeps it a slim banner. target < 300 KB
  //   - resize: center-crop to 2.5:1, THEN scale to 1600×640 (`-z` alone distorts
  //             off-ratio sources). With ImageMagick, one shot:
  //               `magick in.png -resize 1600x640^ -gravity center -extent 1600x640 -quality 82 cover.jpg`
  //             With macOS sips (crop to ratio, then scale — assumes source is wide enough):
  //               `sips -c $((W*2/5)) W in.png --out _t.png   # -c is H W; center-crops to 2.5:1`
  //               `sips -s format jpeg -s formatOptions 82 -z 640 1600 _t.png --out cover.jpg && rm _t.png`
  const cover = await getCoverSrc(slug);
  const postUrl = `${SITE_URL}/blogs/${slug}/`;

  // BlogPosting + BreadcrumbList structured data. Graph keeps both nodes in one
  // script. Image is absolute so crawlers/social can fetch it.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Person", name: post.author },
        keywords: post.tags.join(", "),
        image: `${SITE_URL}${cover ?? OG_DEFAULT}`,
        url: postUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        publisher: { "@type": "Person", name: AUTHOR_NAME },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blogs/`,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <article>
      <JsonLd data={jsonLd} />
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized
        <img
          src={cover}
          alt={`${post.title} cover`}
          width={1600}
          height={640}
          className="my-8 h-auto w-full rounded-lg"
        />
      )}
      <BlogPostHeader metadata={post} />
      <hr className="my-8 border-slate-300" />
      <Content />
    </article>
  );
}
