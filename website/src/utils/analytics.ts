import ReactGA4 from 'react-ga4'

const MEASUREMENT_ID = 'G-FSNEHKZ28F'

// Initialize the analytics module but don't send any data
// until consent has been given
const initializeAnalytics = (): void => {
  ReactGA4.initialize(MEASUREMENT_ID, {
    gaOptions: {
      testMode: process.env.NODE_ENV === 'development',
    },
  })
}

// Manually track a page view event
const trackPageView = (): void => {
  ReactGA4.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  })
}

// Track a custom event
const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
): void => {
  ReactGA4.event({
    category,
    action,
    label,
    value,
  })
}

export { initializeAnalytics, trackPageView, trackEvent }
