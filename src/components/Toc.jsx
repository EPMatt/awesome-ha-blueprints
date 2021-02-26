import React from 'react'

const styles = {
  tocLink: {
    display: 'block',
    marginBottom: '0.5rem',
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
      <p>Table of Contents</p>
      {titles}
    </>
  )
}

export default Toc
