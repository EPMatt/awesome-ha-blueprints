import fs from 'fs'
import matter from 'gray-matter'
import { Table, Container } from 'react-bootstrap'
import Head from 'next/head'
import Link from 'next/link'
import TextIcon from '../../components/TextIcon'
import { ArrowLeft } from 'react-bootstrap-icons'
import Markdown from 'markdown-to-jsx'

function BlueprintCategory(props) {
  const rows = props.blueprints.map((b) => (
    <tr key={b.id}>
      <td>
        <Link href={`/blueprints/${props.category.id}/${b.id}`}>{b.name}</Link>
      </td>
      <td>{b.description}</td>
    </tr>
  ))
  return (
    <Container>
      <Head>
        <title>{props.category.data.name} - Awesome HA Blueprints </title>
      </Head>
      <div className='mb-3'>
        <TextIcon
          as={Link}
          left
          href='/blueprints'
          icon={<ArrowLeft />}
          text='Go back to Blueprints page'
        />
      </div>
      <Markdown className='mb-3'>{props.category.content}</Markdown>
      <p className='mb-5'>
        Please select one of the blueprints below to see more details.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  )
}

async function getStaticProps({ params }) {
  /* read all blueprint directories in the provided category */
  const blueprint_dirs = fs
    .readdirSync(`blueprints/${params.category}`, { withFileTypes: true })
    .filter((f) => f.isDirectory())
  /* for each blueprint extract data from the readme */
  const blueprints = blueprint_dirs.map((b) => {
    const { data } = matter(
      fs.readFileSync(`blueprints/${params.category}/${b.name}/README.md`)
    )
    return { ...data, id: b.name }
  })
  const doc = fs
    .readFileSync(`blueprints/${params.category}/README.md`)
    .toString()
  const { data, content } = matter(doc)
  return {
    props: {
      category: { id: params.category, data: data, content: content },
      blueprints: blueprints,
    },
  }
}

async function getStaticPaths() {
  /* read available blueprint categories */
  const categories = fs
    .readdirSync('blueprints', { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => ({
      params: {
        category: f.name,
      },
    }))
  return {
    paths: categories,
    fallback: false,
  }
}

export { getStaticProps, getStaticPaths }
export default BlueprintCategory
