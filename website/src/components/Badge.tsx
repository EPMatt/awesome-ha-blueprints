import React from 'react'

interface BadgeProps {
  variant: string
  children: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  return <span className={`badge badge--${variant}`}>{children}</span>
}

export default Badge
