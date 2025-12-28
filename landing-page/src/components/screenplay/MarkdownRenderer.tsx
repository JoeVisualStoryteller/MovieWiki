import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './MarkdownRenderer.css'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`markdown-renderer ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => {
            const text = children?.toString() || ''

            // Detect scene headings (INT./EXT. at start)
            if (text.match(/^(INT\.|EXT\.)/)) {
              return <p className="scene-heading">{children}</p>
            }

            // Detect character names (all caps line)
            if (text.match(/^[A-Z\s']+$/) && text.length > 1 && text.length < 30) {
              return <p className="character-name">{children}</p>
            }

            // Default action lines
            return <p className="action">{children}</p>
          },
          h1: ({ children }) => <h1 className="screenplay-title">{children}</h1>,
          h2: ({ children }) => <h2 className="act-title">{children}</h2>,
          h3: ({ children }) => <h3 className="scene-title">{children}</h3>,
          hr: () => <hr className="scene-divider" />,
          strong: ({ children }) => <strong className="emphasis">{children}</strong>,
          em: ({ children }) => <em className="parenthetical">{children}</em>
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
