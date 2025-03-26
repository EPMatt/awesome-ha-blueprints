import React, { useEffect, useState } from 'react'
import { docsContext } from '../../utils'
import ControllerItem from './ControllerItem'

interface Controller {
  id: string
  model: string
  manufacturer: string
  integrations: string[]
  model_name: string
}

const ControllersList: React.FC = () => {
  const [controllers, setControllers] = useState<Controller[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const keys = (docsContext as any).keys()
      const categoryPath = `./controllers/`

      const controllerKeys = keys.filter((key: string) => {
        return (
          key.startsWith(categoryPath) &&
          !key.includes('/example.mdx') &&
          !key.endsWith(`/controllers.mdx`)
        )
      })

      const controllersData = controllerKeys.map((key: string) => {
        const id = key.replace(categoryPath, '').replace('.mdx', '')
        const mdxModule = docsContext(key)
        const {
          title,
          description,
          model,
          manufacturer,
          integrations,
          model_name,
        } = mdxModule.frontMatter

        return {
          id,
          title: title || id,
          description: description || '',
          model: Array.isArray(model) ? model.join(', ') : model || '',
          manufacturer: Array.isArray(manufacturer)
            ? manufacturer.join(', ')
            : manufacturer || '',
          integrations: integrations || [],
          model_name: Array.isArray(model_name)
            ? model_name.join(', ')
            : model_name || '',
        }
      })

      controllersData.sort((a, b) => a.title.localeCompare(b.title))

      setControllers(controllersData)
      setError(null)
    } catch (e) {
      console.error('Error loading controllers:', e)
      setControllers([])
      setError(
        'Failed to load controllers. Please check the console for more details.',
      )
    }
  }, [])

  if (error) {
    return (
      <div className='admonition admonition-danger alert alert--danger'>
        <div className='admonition-heading'>
          <h5>Error loading controllers</h5>
        </div>
        <div className='admonition-content'>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (controllers.length === 0) {
    return <div>No controllers found in this category.</div>
  }

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '20px 0',
  }

  return (
    <div style={listStyle}>
      {controllers.map((controller) => {
        // Construct the image path using the id
        const imagePath = `/awesome-ha-blueprints/img/controllers/${controller.id}.png`

        return (
          <ControllerItem
            key={controller.id}
            id={controller.id}
            model={controller.model}
            model_name={controller.model_name}
            manufacturer={controller.manufacturer}
            integrations={controller.integrations}
            image={imagePath} // Pass the image path to ControllerItem
          />
        )
      })}
    </div>
  )
}

export default ControllersList
