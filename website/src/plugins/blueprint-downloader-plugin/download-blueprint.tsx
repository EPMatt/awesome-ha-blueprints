import React, { useEffect } from 'react'
// @ts-expect-error no types for this
import { useLocation } from '@docusaurus/router'
// @ts-expect-error no types for this
import Head from '@docusaurus/Head'

export default function DownloadBlueprint(props: {
  route: { category: string; id: string }
}) {
  const location = useLocation()
  const category = props.route.category
  const id = props.route.id

  useEffect(() => {
    // Get query parameters
    const searchParams = new URLSearchParams(location.search)
    const version = searchParams.get('version') || 'latest'
    // Sanitize version - only allow 0-9, dot and a-z
    // eslint-disable-next-line
    const sanitizedVersion = version.replace(/[^0-9a-z.]/gi, '')

    if (category && id) {
      // Redirect to GitHub repository
      const githubUrl = `https://raw.githubusercontent.com/EPMatt/awesome-ha-blueprints/main/blueprints/${category}/${id}/${id}.yaml`
      window.location.href = githubUrl
    } else {
      console.error(
        'Invalid blueprint id parameter format. Expected format: category/id',
      )
    }
  }, [location])

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
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>Downloading blueprint...</p>
      </div>
    </>
  )
}
