import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import { changelogsContext } from '../../utils'

interface ChangelogChange {
  description: string
  breaking: boolean
}

interface ChangelogEntry {
  date: string
  changes: ChangelogChange[]
}

interface ChangelogProps {
  category: string
  id: string
}

type ChangelogState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'empty' }
  | { status: 'ready'; entries: ChangelogEntry[] }

const styles = {
  list: {
    listStyleType: 'disc',
    marginLeft: '1.5rem',
  },
  entry: {
    marginBottom: '0.5rem',
  },
  nestedList: {
    listStyleType: 'disc',
    marginTop: '0.5rem',
    marginLeft: '1.5rem',
  },
  inlineMessage: {
    margin: 0,
    color: 'var(--ifm-color-emphasis-600)',
  },
  warning: {
    fontWeight: 600,
  },
}

// Configure marked for inline markdown parsing
// Customize link renderer to open links in new tab
const renderer = new marked.Renderer()
renderer.link = (href, title, text) => {
  const titleAttr = title ? ` title="${title}"` : ''
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${titleAttr}>${text}</a>`
}

marked.setOptions({
  breaks: true, // Convert line breaks to <br>
  gfm: true, // GitHub Flavored Markdown
  renderer,
})

const markdownToHtml = (markdown: string): string => {
  // Use parse() to handle line breaks properly, then strip <p> wrapper tags
  // to avoid extra spacing in inline contexts
  let html = marked.parse(markdown) as string
  // Remove leading/trailing <p> tags and their content wrappers
  html = html.replace(/^<p>/, '').replace(/<\/p>\s*$/, '')
  return html.trim()
}

const renderDescription = (description: string): React.ReactNode => (
  <span dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />
)

const Changelog: React.FC<ChangelogProps> = ({ category, id }) => {
  const [state, setState] = useState<ChangelogState>({ status: 'loading' })

  useEffect(() => {
    let isMounted = true

    const loadChangelog = () => {
      try {
        const path = `./${category}/${id}/changelog.json`
        const parsed = changelogsContext(path) as unknown as ChangelogEntry[]

        if (!isMounted) return

        if (!parsed || parsed.length === 0) {
          setState({ status: 'empty' })
          return
        }

        setState({ status: 'ready', entries: parsed })
      } catch (error) {
        if (!isMounted) return

        // If the file is not found by the context, consider it empty
        const message =
          error instanceof Error ? error.message : 'Unable to load changelog.'

        if (
          /^\.\/.+changelog\.json$/.test(message) ||
          /not found/i.test(message)
        ) {
          setState({ status: 'empty' })
        } else {
          setState({ status: 'error', message })
        }
      }
    }

    loadChangelog()

    return () => {
      isMounted = false
    }
  }, [category, id])

  if (state.status === 'loading') {
    return <p style={styles.inlineMessage}>Loading changelog…</p>
  }

  if (state.status === 'error') {
    return (
      <p style={styles.inlineMessage}>
        Unable to load changelog. {state.message}
      </p>
    )
  }

  if (state.status === 'empty') {
    return (
      <p style={styles.inlineMessage}>No changelog entries available yet.</p>
    )
  }

  return (
    <>
      <ul style={styles.list}>
        {state.entries.map((entry) => {
          const hasMultipleChanges = entry.changes.length > 1
          const hasBreakingChanges = entry.changes.some(
            (change) => change.breaking,
          )

          return (
            <li key={`${entry.date}`} style={styles.entry}>
              <strong>{entry.date}</strong>
              {hasMultipleChanges || hasBreakingChanges ? (
                <ul style={styles.nestedList}>
                  {entry.changes.map((change, index) => (
                    <li key={`${entry.date}-${index}`}>
                      {change.breaking && (
                        <span style={styles.warning}>
                          <strong>🚨 Breaking Change</strong> :
                        </span>
                      )}
                      {change.breaking && ' '}
                      {renderDescription(change.description)}
                    </li>
                  ))}
                </ul>
              ) : (
                <>: {renderDescription(entry.changes[0]?.description ?? '')}</>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Changelog
