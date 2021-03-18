import React from 'react'

const styles = {
  tocLink: {
    display: 'block',
    paddingBottom: '0.5rem',
    borderLeft: '1px solid black',
  },
  level2: {
    paddingLeft: '1rem',
  },
  level3: {
    paddingLeft: '2rem',
  },
}

function Toc(props) {
  const titles = props.data
    .filter((e) => e.lvl > 1 && e.lvl < 4)
    .map((e) => (
      <span style={{ ...styles.tocLink, ...styles['level' + e.lvl] }}>
        <a href={`#${e.slug}`}>{e.content}</a>
      </span>
    ))
  return (
    <>
      <h5 className='pb-4'>Table of Contents</h5>
      {titles}
    </>
  )
}

export default Toc
