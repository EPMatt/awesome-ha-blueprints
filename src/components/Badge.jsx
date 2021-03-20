import React from 'react'

function Badge(props) {
  return (
    <span className={`badge badge--${props.variant}`}>{props.children}</span>
  )
}

export default Badge
