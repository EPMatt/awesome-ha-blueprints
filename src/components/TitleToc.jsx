import React from 'react'
import Toc from './Toc'

function TitleToc(props) {
  return (
    <>
      <h1 className='mb-5'>{props.children}</h1>
      <div className={props.className}>
        {props.between}
        <Toc data={props.data} />
      </div>
    </>
  )
}

export default TitleToc
