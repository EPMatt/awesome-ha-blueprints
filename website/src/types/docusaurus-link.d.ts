declare module '@docusaurus/Link' {
  import React from 'react'
  const Link: React.FC<React.ComponentProps<'a'> & { to?: string }>
  export default Link
}
