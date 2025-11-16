import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 overflow-x-auto my-4 border border-zinc-200 dark:border-zinc-700">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            );
          },
          pre({ children, ...props }: any) {
            // If the pre contains a code element, let the code component handle styling
            if (children && typeof children === 'object' && 'props' in children && children.props.className) {
              return <>{children}</>;
            }
            return (
              <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 overflow-x-auto my-4 border border-zinc-200 dark:border-zinc-700" {...props}>
                {children}
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
