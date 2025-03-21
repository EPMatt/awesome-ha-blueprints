import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import { ChevronRight } from 'react-bootstrap-icons'

interface BlueprintItemProps {
  id: string
  title: string
  description: string
  category: string
}

const BlueprintItem: React.FC<BlueprintItemProps> = ({
  id,
  title,
  description,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle: React.CSSProperties = {
    width: '100%',
    minHeight: '200px',
    boxShadow: isHovered
      ? '0 4px 8px rgba(0, 0, 0, 0.3)'
      : '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '16px',
    color: 'var(--ifm-font-color-base, #000)',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease',
  }

  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '8px',
    transition: 'transform 0.3s ease-out',
    transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
  }

  return (
    <Link
      to={`/docs/blueprints/${category}/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        className='card'
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='card__header'>
          <h3>{title}</h3>
        </div>
        <div className='card__body'>
          <p>{description}</p>
        </div>
        <div className='card__footer' style={footerStyle}>
          <ChevronRight size={20} />
        </div>
      </div>
    </Link>
  )
}

export default BlueprintItem
