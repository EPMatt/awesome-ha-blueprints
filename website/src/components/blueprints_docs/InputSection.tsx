import React, { useState } from 'react'
import Input, { BlueprintInput } from './Input'
import { ChevronDown } from 'react-bootstrap-icons'

const styles = {
  section: {
    marginBottom: '1.25rem',
  },
  header: {
    marginBottom: '1.5rem',
  },
  titleButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.5rem',
    padding: 0,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left' as const,
    transition: 'opacity 0.2s ease',
  },
  titleButtonHover: {
    opacity: 0.7,
  },
  icon: {
    fontSize: '1.25rem',
    color: 'var(--ifm-color-emphasis-600)',
  },
  name: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--ifm-color-emphasis-900)',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  chevron: {
    fontSize: '1rem',
    color: 'var(--ifm-color-emphasis-500)',
    transition: 'transform 0.2s ease',
  },
  chevronCollapsed: {
    transform: 'rotate(-90deg)',
  },
  description: {
    margin: 0,
    color: 'var(--ifm-color-emphasis-700)',
    fontSize: '0.9375rem',
    lineHeight: 1.5,
  },
  content: {
    padding: '0.5rem 0 0 0.5rem',
    borderLeft: '2px solid var(--ifm-color-emphasis-200)',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  },
  collapsedContent: {
    display: 'none',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
}

interface InputSectionProps {
  name: string
  description?: string
  collapsed?: boolean
  input: Record<string, BlueprintInput>
}

const InputSection: React.FC<InputSectionProps> = ({
  name,
  description,
  collapsed: initialCollapsed = false,
  input,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={styles.section}>
      <div style={styles.header}>
        <button
          type='button'
          style={{
            ...styles.titleButton,
            ...(isHovered ? styles.titleButtonHover : {}),
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={styles.title}>
            <h3 style={styles.name}>
              {name}
              <ChevronDown
                style={{
                  ...styles.chevron,
                  ...(isCollapsed ? styles.chevronCollapsed : {}),
                }}
              />
            </h3>
          </div>
        </button>
        {description && <div style={styles.description}>{description}</div>}
      </div>
      <div
        style={{
          ...styles.content,
          ...(isCollapsed ? styles.collapsedContent : {}),
        }}
      >
        {Object.entries(input).map(([key, inputData]) => (
          <Input key={key} inputData={inputData} />
        ))}
      </div>
    </div>
  )
}

export default InputSection
