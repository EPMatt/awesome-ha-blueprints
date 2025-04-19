import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react'
import Cookies from 'js-cookie'
import { initializeAnalytics } from '../utils/analytics'

interface ConsentContextType {
  consent: boolean
  setConsent: (consent: boolean) => void
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined)

export const ConsentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [consent, setConsentState] = useState<boolean>(() => {
    // Check if consent cookie exists on initial load
    return Cookies.get('AnalyticsConsent') === 'true'
  })

  // Set the consent cookie when consent state changes
  const setConsent = (newConsent: boolean) => {
    if (newConsent) {
      Cookies.set('AnalyticsConsent', 'true', { expires: 30 })
    } else {
      Cookies.set('AnalyticsConsent', 'false', { expires: 30 })
    }
    setConsentState(newConsent)
  }

  // Initialize analytics when consent is given
  useEffect(() => {
    if (consent) {
      console.log('Consent given, initializing analytics')
      initializeAnalytics()
    }
  }, [consent])

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  )
}

// Custom hook to use the consent context
export const useConsent = (): ConsentContextType => {
  const context = useContext(ConsentContext)
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider')
  }
  return context
}
