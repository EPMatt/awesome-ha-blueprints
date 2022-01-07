import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

function Help() {
  return (
    <Layout
      title='Help'
      description='Ask for help for anything related to Awesome HA Blueprints'
    >
      <div
        className='row row--no-gutters padding-vert--lg'
        style={{ justifyContent: 'center', width: '100%' }}
      >
        <div className='col padding-horiz--sm' style={{ maxWidth: 1200 }}>
          <div
            className='row row--no-gutters'
            style={{ justifyContent: 'space-between' }}
          >
            <div className='col col--4' style={{ maxWidth: 300 }}>
              <h3>Browse documentation</h3>
              <p>
                This website groups all the documentation related to the
                project. You can start from{' '}
                <Link to='/docs/introduction'>here</Link>.
              </p>
            </div>
            <div className='col col--4' style={{ maxWidth: 300 }}>
              <h3>Community</h3>
              <p>
                For questions and feedback, join the discussion in the{' '}
                <a href='https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687'>
                  Home Assitant Community Forum
                </a>
                .
              </p>
            </div>
            <div className='col col--4' style={{ maxWidth: 300 }}>
              <h3>Have an issue or want to contribute?</h3>
              <p>
                Open an{' '}
                <a href='https://github.com/EPMatt/awesome-ha-blueprints/issues'>
                  Issue
                </a>{' '}
                or submit a{' '}
                <a href='https://github.com/EPMatt/awesome-ha-blueprints/pulls'>
                  Pull Request
                </a>
                .{' '}
                <b>
                  Please read{' '}
                  <Link to='/docs/contributing'>Contribution Guidelines</Link>{' '}
                  first.
                </b>
              </p>
            </div>
          </div>
          <div
            className='row row--no-gutters padding-top--lg'
            style={{ justifyContent: 'space-between' }}
          >
            <div className='col col--4' style={{ maxWidth: 300 }}>
              <h3>Stay up to date</h3>
              <p>
                Visit the{' '}
                <a href='https://github.com/EPMatt/awesome-ha-blueprints'>
                  GitHub repository
                </a>{' '}
                for the latest updates. If you like the project, consider
                leaving a star on GitHub. ⭐
              </p>
            </div>
            <div className='col col--4' style={{ maxWidth: 300 }}>
              <h3>Donate!</h3>
              <p>
                If you love the project and want to help its future
                developments, consider showing your support by{' '}
                <a href='https://www.buymeacoffee.com/epmatt'>
                  making a donation
                </a>
                . ☕
              </p>
            </div>
            <div className='col col--4' style={{ maxWidth: 300 }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Help
