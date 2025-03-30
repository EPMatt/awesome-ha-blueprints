import React from 'react'

interface ControllerImageProps {
  children: React.ReactNode
}

const ControllerImage: React.FC<ControllerImageProps> = ({ children }) => {
  return <div style={{ width: 200 }}>{children}</div>
}

export default ControllerImage
