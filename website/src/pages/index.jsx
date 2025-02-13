import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useLocation } from '@docusaurus/router'

export default function Home() {
  let location = useLocation()

  React.useEffect(() => {
    // check if dataLayer exists i.e can we track or not?
    if (typeof dataLayer !== 'undefined') {
      // send new event to Google Tag Manager
      dataLayer.push({ event: 'pageview' })
    }
  }, [location])

  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <>
      <CookieConsent
        location='bottom'
        buttonText='Accept cookies'
        cookieName='AnalyticsConsent'
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
        enableDeclineButton
        declineButtonText='Reject cookies'
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Layout
        title={`${siteConfig.title}`}
        description={`${siteConfig.tagline}`}
      >
        <header
          className={clsx('hero hero--primary', styles.heroBanner)}
          style={{ minHeight: '70vh' }}
        >
          <div className='container'>
            <img
              alt='Awesome HA Blueprints logo'
              src={useBaseUrl('img/logo.svg')}
              className='margin-bottom--lg'
              style={{ width: 80 }}
            />
            <h1 className='hero__title' style={{ color: 'white' }}>
              {siteConfig.title}
            </h1>
            <p className='hero__subtitle' style={{ color: 'white' }}>
              A curated collection of blueprints for Home Assistant.
              <br />
              Reliable, customizable, fully tested by the community.
            </p>
            <div className={`row margin-top--xl ${styles.buttons}`}>
              <div className='col margin-bottom--lg'>
                <Link
                  className={clsx(
                    'button button button--secondary button--lg margin-horiz--sm',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/introduction')}
                >
                  Get Started
                </Link>
              </div>
              <div className='col margin-bottom--lg'>
                <Link
                  className={clsx(
                    'button button button--secondary button--lg margin-horiz--sm',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/blueprints')}
                >
                  Browse Blueprints
                </Link>
              </div>
            </div>
          </div>
        </header>
      </Layout>
    </>
  )
}
