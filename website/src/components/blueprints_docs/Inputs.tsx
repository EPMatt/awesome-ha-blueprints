import React, { useEffect, useState } from 'react'
import { blueprintsContext } from '../../utils'

interface InputsProps {
  category: string
  id: string
}

const Inputs: React.FC<InputsProps> = ({ category, id }) => {
  const [yamlText, setYamlText] = useState<string>('')

  useEffect(() => {
    try {
      const path = `./${category}/${id}/${id}.yaml`
      const content = blueprintsContext(path)
      setYamlText(content)
    } catch (error) {
      console.error('Error fetching blueprint:', error)
      setYamlText('')
    }
  }, [category, id])

  return <pre>{yamlText}</pre>
}

export default Inputs
