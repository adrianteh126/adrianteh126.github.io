import { TagPill } from "@/components/site/TagPill";

interface BlogPostHeaderProps {
  title?: string;
  date?: string;
  author?: string;
  tags?: string[];
  description?: string;
  metadata?: {
    title: string;
    date: string;
    author: string;
    tags: string[];
    description: string;
  };
}

export function BlogPostHeader(props: BlogPostHeaderProps) {
  // Use metadata if provided, otherwise fall back to individual props
  const title = props.metadata?.title || props.title || "";
  const date = props.metadata?.date || props.date || "";
  const author = props.metadata?.author || props.author || "";
  const tags = props.metadata?.tags || props.tags || [];
  const description = props.metadata?.description || props.description || "";

  return (
    <div className="mb-8">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <div>
          By <span className="font-semibold">{author}</span>
        </div>
        <div>•</div>
        <div>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      {description && (
        <p className="mt-3 text-lg text-slate-600">{description}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>
    </div>
  );
}
