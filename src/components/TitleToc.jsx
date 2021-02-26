import React from 'react'
import Toc from './Toc'

function TitleToc(props) {
  return (
    <>
      <h1 className='mb-5'>{props.children}</h1>
      <Toc data={props.data} />
    </>
  )
}

export default TitleToc
