import React, { useEffect, useState, ReactNode } from 'react'
import CookieConsent from 'react-cookie-consent'
import { initializeAnalytics } from '../utils/analytics'
import Cookies from 'js-cookie'

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer?: any[]
  }
}

interface RootProps {
  children: ReactNode
}

// Root component wraps the entire application
export default function Root({ children }: RootProps): React.ReactElement {
  const [consent, setConsent] = useState<boolean>(() => {
    // Check if consent cookie exists on initial load
    return Cookies.get('AnalyticsConsent') === 'true'
  })

  useEffect(() => {
    if (consent) {
      console.log('Consent given, initializing analytics')
      // if consent is given, initialize analytics and track the pageview
      initializeAnalytics()
    }
  }, [consent])

  return (
    <>
      {children}
      <CookieConsent
        location='bottom'
        buttonText='Accept cookies'
        cookieName='AnalyticsConsent'
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
        enableDeclineButton
        declineButtonText='Reject cookies'
        onAccept={() => setConsent(true)}
        onDecline={() => setConsent(false)}
      >
        This website uses cookies to improve the user experience.
      </CookieConsent>
    </>
  )
}
