/**
 * Context for accessing blueprint YAML files
 */
export const blueprintsContext = require.context(
  '@blueprints',
  true,
  /\.ya?ml$/,
)

interface DocusaurusFrontMatter {
  title: string
  description: string
  [key: string]: unknown
}

/**
 * A Docusaurus-processed MDX module
 */
interface DocusaurusModule {
  /** The frontmatter data from the MDX file */
  readonly frontMatter: DocusaurusFrontMatter
}

/**
 * Context for accessing MDX documentation files.
 * Returns Docusaurus-processed MDX modules that include:
 * - frontMatter: The YAML frontmatter data (title, description, etc.)
 * - toc: Table of contents extracted from headings
 * - default: The React component for the content
 * - and more
 */
export const docsContext = require.context(
  '@site/docs/blueprints',
  true,
  /\.mdx$/,
) as unknown as (path: string) => DocusaurusModule
