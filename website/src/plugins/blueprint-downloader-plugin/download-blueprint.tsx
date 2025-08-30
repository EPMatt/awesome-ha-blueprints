import React, { useEffect } from 'react'
// @ts-expect-error no types for this
import Head from '@docusaurus/Head'
import { useConsent } from '../../contexts/ConsentContext'
import { trackEvent } from '../../utils/analytics'

export default function DownloadBlueprint(props: {
  route: { category: string; id: string }
}) {
  const category = props.route.category
  const id = props.route.id
  const { consent } = useConsent()

  const githubUrl = `https://raw.githubusercontent.com/EPMatt/awesome-ha-blueprints/main/blueprints/${category}/${id}/${id}.yaml`
  const myHomeAssistantURL = `https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${encodeURIComponent(githubUrl)}`

  useEffect(() => {
    // Track the blueprint download event if user has given consent
    if (consent) {
      trackEvent('blueprint', 'download', `${category}/${id}`, undefined)
    }

    // Redirect to HA to download the blueprint
    window.location.href = myHomeAssistantURL
  }, [consent, category, id, myHomeAssistantURL])

  return (
    <>
      <Head>
        <title>
          Download {category}/{id}
        </title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <h1>Thanks for downloading!</h1>
        <p>Redirecting to your Home Assistant instance...</p>
      </div>
    </>
  )
}
