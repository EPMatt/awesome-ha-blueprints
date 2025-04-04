declare module '@docusaurus/router' {
  export function useLocation(): {
    pathname: string
    search: string
    hash: string
  }
}

declare module '@docusaurus/Link' {
  import React from 'react'

  interface LinkProps {
    to: string
    className?: string
    children?: React.ReactNode
    [key: string]: any
  }

  const Link: React.FC<LinkProps>
  export default Link
}

declare module '@docusaurus/useBaseUrl' {
  function useBaseUrl(path: string): string
  export default useBaseUrl
}

declare module '@docusaurus/useDocusaurusContext' {
  interface DocusaurusContext {
    siteConfig?: {
      title?: string
      tagline?: string
      [key: string]: any
    }
    [key: string]: any
  }

  function useDocusaurusContext(): DocusaurusContext
  export default useDocusaurusContext
}

declare module '@theme/Layout' {
  import React from 'react'

  interface LayoutProps {
    title?: string
    description?: string
    children: React.ReactNode
  }

  const Layout: React.FC<LayoutProps>
  export default Layout
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
