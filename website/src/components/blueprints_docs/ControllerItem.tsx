import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import { ChevronRight } from 'react-bootstrap-icons'

interface ControllerItemProps {
  id: string
  model: string
  manufacturer: string | string[]
  integrations: string[]
  image: string
  model_name: string
}

const ControllerItem: React.FC<ControllerItemProps> = ({
  id,
  model,
  manufacturer,
  integrations,
  image,
  model_name,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const formattedManufacturer = Array.isArray(manufacturer)
    ? manufacturer.join(', ')
    : manufacturer

  const cardStyle: React.CSSProperties = {
    width: '100%',
    minHeight: '120px',
    boxShadow: isHovered
      ? '0 4px 8px rgba(0, 0, 0, 0.3)'
      : '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '16px',
    color: 'var(--ifm-font-color-base, #000)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    gap: '16px',
    transition: 'box-shadow 0.3s ease',
  }

  const imageStyle: React.CSSProperties = {
    width: '150px',
    height: 'auto',
    borderRadius: '8px',
    flexShrink: 0,
  }

  const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    overflow: 'wrap',
    paddingRight: '24px',
  }

  const footerStyle: React.CSSProperties = {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: `translateY(-50%) ${isHovered ? 'translateX(6px)' : 'translateX(0)'}`,
    transition: 'transform 0.3s ease-out',
  }

  return (
    <Link
      to={`/docs/blueprints/controllers/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        className='card'
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={textContainerStyle}>
          <h3 style={{ margin: '0' }}>{model_name}</h3>
        </div>
        <img src={image} alt={model_name} style={imageStyle} />
        <div style={textContainerStyle}>
          <p style={{ margin: '0' }}>
            <strong>Model:</strong> {model}
          </p>
          <p style={{ margin: '0' }}>
            <strong>Manufacturer:</strong> {formattedManufacturer}
          </p>
          <p style={{ margin: '0' }}>
            <strong>Integrations:</strong> {integrations.join(', ')}
          </p>
        </div>
        <div className='card__footer' style={footerStyle}>
          <ChevronRight size={20} />
        </div>
      </div>
    </Link>
  )
}

export default ControllerItem
