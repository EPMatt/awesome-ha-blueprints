import React from 'react'

function Badge({ variant, children }) {
  return <span className={`badge badge--${variant}`}>{children}</span>
}

export default Badge
