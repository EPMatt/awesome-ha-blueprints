import fs from 'fs'
import path from 'path'
import glob from 'glob'

/**
 * Docusaurus plugin that generates routes for all blueprints
 * Routes follow the pattern: category/id
 */
export default function blueprintRoutesPlugin(context) {
  return {
    name: 'blueprint-routes-plugin',

    async loadContent() {
      const { siteDir } = context
      const blueprintsDir = path.resolve(siteDir, '../blueprints')

      const blueprintFiles = glob.sync('**/*.yaml', {
        cwd: blueprintsDir,
        absolute: true,
      })

      const blueprints = []

      for (const file of blueprintFiles) {
        try {
          // Extract category and id from file path
          const relativePath = path.relative(blueprintsDir, file)
          const pathParts = relativePath.split(path.sep)

          // The first directory is the category
          const category = pathParts[0]

          // The second directory is the blueprint ID
          const id = pathParts[1]

          // Skip if not in the expected directory structure
          if (!category || !id) continue

          // Read blueprint content - only get the raw content
          const rawContent = fs.readFileSync(file, 'utf8')

          // Add blueprint metadata
          blueprints.push({
            id,
            category,
            path: relativePath,
            filePath: file,
            rawContent,
          })
        } catch (error) {
          console.error(`Error processing blueprint file ${file}:`, error)
        }
      }

      return blueprints
    },

    async contentLoaded({ content, actions }) {
      const { addRoute } = actions

      // For each blueprint, create a route
      for (const blueprint of content) {
        // Add download route for this blueprint
        addRoute({
          path: `/awesome-ha-blueprints/blueprints/${blueprint.category}/${blueprint.id}`,
          component:
            '../src/plugins/blueprint-downloader-plugin/download-blueprint.tsx',
          exact: true,
          // extra props
          category: blueprint.category,
          id: blueprint.id,
        })
      }

      console.log('Blueprint download routes created')
    },
  }
}
