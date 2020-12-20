import '../styles/globals.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div id='root' className='d-flex flex-column'>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand>
          <Link href='/'>Awesome HA Blueprints</Link>
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link href='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link href='/blueprints'>Blueprints</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search Blueprints...'
            className='mr-sm-2'
          />
          <Button variant='outline-secondary'>Search</Button>
        </Form>
      </Navbar>
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <footer className='text-center mt-auto'>
        © 2020 Matteo Agnoletto. Licensed under the{' '}
        <a href='https://github.com/EPMatt/awesome-ha-blueprints/blob/main/LICENSE'>
          GPL-3.0 License
        </a>
      </footer>
    </div>
  )
}

export default MyApp
