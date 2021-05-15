import React from 'react'

function ControllerImage({ img }) {
  return (
    <img
      style={{ width: 200 }}
      size='2000'
      src={`/static/img/controllers/${img}`}
      alt={img}
    />
  )
}

export default ControllerImage
