import React from 'react'
import Toc from './Toc'

function TitleToc(props) {
  return (
    <div className={props.className}>
      <h1 className='mb-5'>{props.children}</h1>
      {props.between}
      <Toc data={props.data} />
    </div>
  )
}

export default TitleToc
