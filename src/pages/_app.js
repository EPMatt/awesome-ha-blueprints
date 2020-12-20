import '../styles/globals.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <div id='root' className='d-flex flex-column'>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='lg'
        bg='primary'
        variant='dark'
      >
        <Navbar.Brand href='/awesome-ha-blueprints/'>
          Awesome HA Blueprints
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/awesome-ha-blueprints/'>Home</Nav.Link>
            <Nav.Link href='/awesome-ha-blueprints/blueprints'>
              Blueprints
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <footer className='text-center mt-auto'>
        Maintained by <a href='https://github.com/EPMatt/'>Matteo Agnoletto</a>.
        Licensed under the{' '}
        <a href='https://github.com/EPMatt/awesome-ha-blueprints/blob/main/LICENSE'>
          GPL-3.0 License
        </a>
      </footer>
    </div>
  )
}

export default MyApp
