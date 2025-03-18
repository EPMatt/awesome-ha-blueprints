import { ReactNode } from 'react'

const ControllerImage: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div style={{ width: 200 }}>{children}</div>
}

export default ControllerImage
