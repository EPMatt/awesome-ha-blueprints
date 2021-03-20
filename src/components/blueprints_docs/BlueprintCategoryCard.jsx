import React from 'react'
import * as Icons from 'react-bootstrap-icons'

function BlueprintCategoryCard(props) {
  const Icon=Icons[props.icon]
  return (
    <div class='col col--4 padding-bottom--lg'>
      <div class='card item shadow--md'>
        <div
          class='card__header padding-vert--xl'
          style={{ textAlign: 'center', backgroundColor: props.color, color:'black'}}
        >
          <Icon size={48} />
        </div>
        <div class='card__body' style={{minHeight:'13rem'}}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <div class='card__footer'>
          <a href={`./${props.id}`} class='button button--primary button--block'>Explore</a>
        </div>
      </div>
    </div>
  )
}

export default BlueprintCategoryCard
