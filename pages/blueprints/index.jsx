import fs from 'fs'
import { Table } from 'react-bootstrap'
import Head from 'next/head'
import Link from 'next/link'

function Blueprints(props) {
  const rows = props.categories.map((c) => (
    <tr>
      <td>
        <code>
          <Link href={`/blueprints/${c.name}`}>{c.name}</Link>
        </code>
      </td>
    </tr>
  ))
  return (
    <>
      <Head>
        <title>Blueprints - Awesome HA Blueprints </title>
      </Head>
      <h1 className='mb-5'>Blueprints</h1>
      <p className='mb-5'>
        Select from the blueprint categories listed below. Please note that
        currently Home Assistant only provides supports <code>automation</code>{' '}
        blueprints.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  )
}

async function getStaticProps() {
  const categories = fs
    .readdirSync('blueprints', { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => ({
      name: f.name,
    }))
  return {
    props: { categories },
  }
}

async function getStaticPaths() {
  return {
    paths: [{ params: { category: '/' } }],
    fallback: false,
  }
}

export { getStaticProps, getStaticPaths }
export default Blueprints
