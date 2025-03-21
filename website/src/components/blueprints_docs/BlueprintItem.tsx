import React from 'react'
import Link from '@docusaurus/Link'

interface BlueprintItemProps {
  id: string
  title: string
  description: string
  category: string
}

const BlueprintItem: React.FC<BlueprintItemProps> = ({
  id,
  title,
  description,
  category,
}) => {
  return (
    <tr>
      <td>
        <Link to={`/docs/blueprints/${category}/${id}`}>{title}</Link>
      </td>
      <td>{description}</td>
    </tr>
  )
}

export default BlueprintItem
