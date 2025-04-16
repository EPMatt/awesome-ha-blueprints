import React, { useEffect, useState } from 'react'
import { docsContext } from '../../utils'
import BlueprintItem from './BlueprintItem'

interface BlueprintsListProps {
  category: string
}

interface Blueprint {
  id: string
  title: string
  description: string
}

const BlueprintsList: React.FC<BlueprintsListProps> = ({ category }) => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      // Get all MDX files in the specified category
      const keys = (docsContext as any).keys()
      const categoryPath = `./${category}/`

      // Filter to just the blueprints in this category, excluding example files
      const blueprintKeys = keys.filter((key: string) => {
        return (
          key.startsWith(categoryPath) &&
          !key.includes('/example.mdx') &&
          !key.endsWith(`/${category}.mdx`)
        ) // Exclude the category index file
      })

      // Process each blueprint
      const blueprintsData = blueprintKeys.map((key: string) => {
        // Extract ID from the path (remove .mdx extension and category prefix)
        const id = key.replace(categoryPath, '').replace('.mdx', '')

        // Get the MDX module and extract frontmatter
        const mdxModule = docsContext(key)
        const { title, description } = mdxModule.frontMatter

        return {
          id,
          title: title || id,
          description: description || '',
        }
      })

      // Sort blueprints alphabetically by title
      blueprintsData.sort((a, b) => a.title.localeCompare(b.title))

      setBlueprints(blueprintsData)
      setError(null)
    } catch (e) {
      console.error('Error loading blueprints:', e)
      setBlueprints([])
      setError(
        'Failed to load blueprints. Please check the console for more details.',
      )
    }
  }, [category])

  if (error) {
    return (
      <div className='admonition admonition-danger alert alert--danger'>
        <div className='admonition-heading'>
          <h5>Error loading blueprints</h5>
        </div>
        <div className='admonition-content'>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (blueprints.length === 0) {
    return <div>No blueprints found in this category.</div>
  }

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '20px 0',
  }

  return (
    <div style={listStyle}>
      {blueprints.map((blueprint) => (
        <BlueprintItem
          key={blueprint.id}
          id={blueprint.id}
          title={blueprint.title}
          description={blueprint.description}
          category={category}
        />
      ))}
    </div>
  )
}

export default BlueprintsList
