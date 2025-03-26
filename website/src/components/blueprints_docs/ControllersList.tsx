import React, { useEffect, useState } from 'react'
import { docsContext } from '../../utils'
import ControllerItem from './ControllerItem'

interface Controller {
  id: string
  model: string
  manufacturer: string | string[]
  integrations: string[]
  model_name: string
}

const ControllersList: React.FC = () => {
  const [controllers, setControllers] = useState<Controller[]>([])
  const [error, setError] = useState<string | null>(null)
  const [uniqueManufacturers, setUniqueManufacturers] = useState<string[]>([])
  const [totalControllers, setTotalControllers] = useState<number>(0)

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
          manufacturer: manufacturer || '',
          integrations: integrations || [],
          model_name: Array.isArray(model_name)
            ? model_name.join(', ')
            : model_name || '',
        }
      })

      controllersData.sort((a, b) => a.title.localeCompare(b.title))

      const manufacturerSet = new Set<string>()

      controllersData.forEach((controller) => {
        if (Array.isArray(controller.manufacturer)) {
          controller.manufacturer.forEach((mfr) => {
            if (mfr && typeof mfr === 'string' && mfr.trim() !== '') {
              manufacturerSet.add(mfr.trim())
            }
          })
        } else if (
          controller.manufacturer &&
          typeof controller.manufacturer === 'string'
        ) {
          manufacturerSet.add(controller.manufacturer.trim())
        }
      })

      setControllers(controllersData)
      setTotalControllers(controllersData.length)
      setUniqueManufacturers(Array.from(manufacturerSet))
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

  const statsStyle: React.CSSProperties = {
    marginBottom: '20px',
    padding: '12px 16px',
    backgroundColor: 'var(--ifm-color-emphasis-100)',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

  return (
    <>
      <div style={statsStyle}>
        <div>
          Currently {totalControllers} devices from {uniqueManufacturers.length}{' '}
          different vendors are supported.
        </div>
      </div>

      <div style={listStyle}>
        {controllers.map((controller) => {
          const imagePath = `/awesome-ha-blueprints/img/controllers/${controller.id}.png`

          return (
            <ControllerItem
              key={controller.id}
              id={controller.id}
              model={controller.model}
              model_name={controller.model_name}
              manufacturer={controller.manufacturer}
              integrations={controller.integrations}
              image={imagePath}
            />
          )
        })}
      </div>
    </>
  )
}

export default ControllersList
