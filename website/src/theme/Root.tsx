import React, { ReactNode } from 'react'
import CookieConsent from 'react-cookie-consent'
import { ConsentProvider, useConsent } from '../contexts/ConsentContext'

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer?: any[]
  }
}

interface RootProps {
  children: ReactNode
}

// Cookie consent banner component
const CookieConsentBanner: React.FC = () => {
  const { setConsent } = useConsent()

  return (
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
  )
}

// Root component wraps the entire application
export default function Root({ children }: RootProps): React.ReactElement {
  return (
    <ConsentProvider>
      {children}
      <CookieConsentBanner />
    </ConsentProvider>
  )
}
