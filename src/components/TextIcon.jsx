import React from 'react'

function TextIcon(props) {
  const styles = { verticalAlign: 'middle' }
  const Element = props.as
  return (
    <>
      {props.left && props.icon}
      <span
        style={styles}
        className={(props.left && 'ml-2') || (props.right && 'mr-2')}
      >
        <Element href={props.href}>{props.text}</Element>
      </span>
      {props.right && props.icon}
    </>
  )
}

export default TextIcon
