interface BlogPostHeaderProps {
  title?: string;
  date?: string;
  author?: string;
  tag?: string;
  metadata?: {
    title: string;
    date: string;
    author: string;
    tag: string;
  };
}

export function BlogPostHeader(props: BlogPostHeaderProps) {
  // Use metadata if provided, otherwise fall back to individual props
  const title = props.metadata?.title || props.title || "";
  const date = props.metadata?.date || props.date || "";
  const author = props.metadata?.author || props.author || "";
  const tag = props.metadata?.tag || props.tag || "";

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
      <div className="mt-4 flex flex-wrap gap-2">
        {tag.split(",").map((t) => (
          <span
            key={t.trim()}
            className="badge badge-primary badge-sm uppercase"
          >
            {t.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
