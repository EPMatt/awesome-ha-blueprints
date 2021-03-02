import fs from 'fs'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import Head from 'next/head'
import { Joystick, GearWideConnected, PlugFill } from 'react-bootstrap-icons'
import matter from 'gray-matter'

const categoryIcons = {
  controllers: Joystick,
  hooks: PlugFill,
  automation: GearWideConnected,
}

function Blueprints(props) {
  const cards = props.categories.map((e, key) => {
    const Element = categoryIcons[e.id]
    return (
      <Col xs={'auto'} key={key} className='py-3'>
        <Card style={{ maxWidth: '18rem', height: '100%' }}>
          <Card.Header
            className='text-center py-5'
            style={{ backgroundColor: e.color, border: 'unset' }}
          >
            <Element size={48} />
          </Card.Header>
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>{e.description}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: 'unset', border: 'unset' }}>
            <Button variant='primary' href={`./blueprints/${e.id}`}>
              Explore
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Head>
        <title>Blueprints - Awesome HA Blueprints </title>
      </Head>
      <h1 className='mb-5'>Blueprints</h1>
      <p className='mb-5'>
        Select from the blueprint categories listed below. Please note that
        currently Home Assistant only supports blueprints for the{' '}
        <code>automation</code> domain.
      </p>
      <Row className='align-items-stretch'>{cards}</Row>
    </Container>
  )
}

async function getStaticProps() {
  const categories = fs
    .readdirSync('blueprints', { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => {
      const { data } = matter(fs.readFileSync(`blueprints/${f.name}/README.md`))
      return {
        id: f.name,
        ...data,
      }
    })
  return {
    props: { categories },
  }
}

export { getStaticProps }
export default Blueprints
