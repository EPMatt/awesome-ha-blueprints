import React from 'react'

function ControllerImage(props) {
  return (
    <img
      style={{ width: 200 }}
      size='2000'
      src={`/static/img/controllers/${props.img}`}
    />
  )
}

export default ControllerImage
