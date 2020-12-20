import React from 'react'

function TextIcon(props) {
  const styles = { verticalAlign: 'middle', display: 'inline-block' }
  const Element = props.as
  return (
    <span>
      {props.left && props.icon}
      <Element href={props.href}>
        <a
          className={(props.left && 'ml-2') || (props.right && 'mr-2')}
          style={styles}
        >
          {props.text}
        </a>
      </Element>
      {props.right && props.icon}
    </span>
  )
}

export default TextIcon
