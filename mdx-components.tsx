import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 mt-8 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-6 text-2xl font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4 text-xl font-bold">{children}</h4>
    ),
    p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal pl-6">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} target="_blank" className="text-primary">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-slate-300 pl-4 italic text-slate-600">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-base-300 px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-base-300 p-4 text-sm text-base-content">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-slate-200" />,
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full border-collapse border border-slate-300">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-slate-100">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-slate-300">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="border border-slate-300 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-slate-300 px-4 py-2">{children}</td>
    ),
    img: ({ src, alt }) => (
      <span className="my-6 flex justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full rounded-lg shadow-md md:max-w-3xl"
        />
      </span>
    ),
    ...components,
  };
}
