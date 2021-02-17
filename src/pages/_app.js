import '../styles/globals.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import { GitHub } from '../components/Icons'
import TextIcon from '../components/TextIcon'

function MyApp({ Component, pageProps }) {
  return (
    <div id='root' className='d-flex flex-column'>
      <Head>
        <link rel='icon' href='/awesome-ha-blueprints/favicon.ico' />
      </Head>
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
          <Nav className='ml-auto'>
            <Nav.Link>
              <TextIcon
                as='span'
                right
                icon={<GitHub width='24' height='24' />}
                href='https://github.com/EPMatt/awesome-ha-blueprints'
                text={`See on`}
                style={{ color: 'inherit' }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>
          <Component {...pageProps} />
      </main>
      <footer className='text-center mt-auto px-3'>
        Awesome HA Blueprints is maintained by{' '}
        <a href='https://github.com/EPMatt/'>Matteo Agnoletto</a>.<br></br>
        Licensed under the{' '}
        <a href='https://github.com/EPMatt/awesome-ha-blueprints/blob/main/LICENSE'>
          GPL-3.0 License
        </a>
      </footer>
    </div>
  )
}

export default MyApp
