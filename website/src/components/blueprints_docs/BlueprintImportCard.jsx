import React, { useState } from 'react'
import { ClipboardPlus } from 'react-bootstrap-icons'

const styles = {
  myHomeAssistantImage: {
    width: '100%',
    maxWidth: 212,
  },
}

function BlueprintImportCard({ category, id }) {
  const [copy, setCopy] = useState(false)
  const url = `https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/${category}/${id}/${id}.yaml`
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url)
    setCopy(true)
  }
  return (
    <div className='card item shadow--md'>
      <div className='card__header margin-bottom--md'>
        <h3>Import this blueprint</h3>
      </div>
      <div className='card__body'>
        <div className='row row--no-gutters'>
          <div className='col col--6'>
            <h5>My Home Assistant</h5>
            <p>
              <a
                href={`https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${escape(
                  url
                )}`}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='https://my.home-assistant.io/badges/blueprint_import.svg'
                  alt='Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.'
                  style={styles.myHomeAssistantImage}
                />
              </a>
              <br />
              <small>(Home Assistant 2021.3.0 or higher)</small>
            </p>
          </div>
          <div className='col col--6'>
            <h5>Direct Link</h5>
            <button
              type='button'
              className={`button button--${copy ? 'success' : 'primary'}`}
              onClick={copyToClipboard}
            >
              <span>
                <ClipboardPlus size={16} />
                <span> {copy ? 'Link Copied!' : 'Copy Link'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueprintImportCard
