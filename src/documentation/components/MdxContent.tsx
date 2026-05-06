import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css" // swap theme as you like

interface MdxContentProps {
  content: string
}

const getChildrenId = (children: React.ReactNode) => {
  let id = "";
  if (typeof children === "string") {
    id = children.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }
  return id;
}

export function MdxContent({ content }: MdxContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ children }) => <h1 id={getChildrenId(children)} className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">{children}</h1>,
        h2: ({ children }) => <h2 id={getChildrenId(children)} className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">{children}</h2>,
        h3: ({ children }) => <h3 id={getChildrenId(children)} className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>,
        p: ({ children }) => <p className="leading-7 not-first:mt-6">{children}</p>,
        code: ({ className, children }) => (
          <code className={`${className} relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm`}>
            {children}
          </code>
        ),
        a: ({ href, children }) => <a href={href} className="font-medium text-primary underline underline-offset-4">{children}</a>,
        ul: ({ children }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
        ol: ({ children }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>,
        table: ({ children }) => <div className="my-6 w-full overflow-y-auto"><table className="w-full">{children}</table></div>,
        th: ({ children }) => <th className="border px-4 py-2 text-left font-bold">{children}</th>,
        td: ({ children }) => <td className="border px-4 py-2 text-left">{children}</td>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}