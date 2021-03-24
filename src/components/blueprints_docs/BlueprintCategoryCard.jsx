import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import Link from '@docusaurus/Link'

function BlueprintCategoryCard(props) {
  const Icon = Icons[props.icon]
  return (
    <div className='col col--4 padding-bottom--lg'>
      <div className='card item shadow--md'>
        <div
          className='card__header padding-vert--xl'
          style={{
            textAlign: 'center',
            backgroundColor: props.color,
            color: 'black',
          }}
        >
          <Icon size={48} />
        </div>
        <div className='card__body' style={{ minHeight: '13rem' }}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div className='card__footer'>
          <Link
            to={`/docs/blueprints/${props.id}`}
            className='button button--primary button--block'
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlueprintCategoryCard
