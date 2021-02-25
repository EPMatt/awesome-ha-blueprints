import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import Head from 'next/head'
import TextIcon from '../../../components/TextIcon'
import Link from 'next/link'
import { ArrowLeft } from 'react-bootstrap-icons'
import {
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Container,
} from 'react-bootstrap'
import React from 'react'
import Highlight from 'react-highlight.js'
import FragmentWrapper from '../../../components/FragmentWrapper'
import Toc from '../../../components/Toc'
import TitleToc from '../../../components/TitleToc'
import toc from 'markdown-toc'
import { useMediaQuery } from 'react-responsive'
import { withInvisibleAnchor } from '../../../utils'
import Input from '../../../components/Input'

function Blueprint(props) {
  const copyToClipboard = async (e) => {
    await navigator.clipboard.writeText(
      `https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/${props.category}/${props.id}/${props.id}.yaml`
    )
  }

  const md = useMediaQuery({ query: '(min-width: 768px)' })
  return (
    <Container fluid className='px-md-4'>
      <Row className=''>
        {md && (
          <Col xs={12} md={3} lg={2} className='position-fixed'>
            <Toc data={props.tocData}></Toc>
          </Col>
        )}
        <Col xs={12} md={8} className='offset-md-3 offset-lg-2'>
          <Head>
            <title>{props.data.name} - Awesome HA Blueprints </title>
          </Head>
          <Row className='mb-3 justify-content-between'>
            <Col xs='auto'>
              <TextIcon
                as={Link}
                left
                href={`/blueprints/${props.category}`}
                icon={<ArrowLeft />}
                text={`Go back to the ${props.category} category`}
              />
            </Col>
            <Col xs='auto'>
              <OverlayTrigger
                trigger='click'
                placement='top'
                overlay={(props) => (
                  <Tooltip id='overlay-example' {...props}>
                    Link Copied!
                  </Tooltip>
                )}
              >
                <Button onClick={copyToClipboard} variant='success'>
                  Copy Link
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
          <Markdown
            options={{
              overrides: {
                pre: FragmentWrapper,
                h1: !md && {
                  component: TitleToc,
                  props: {
                    data: props.tocData,
                  },
                },
                h2: withInvisibleAnchor('h2'),
                code: {
                  component: Highlight,
                  props: {
                    language: 'yaml',
                  },
                },
                Input:{
                  component: Input
                }
              },
            }}
          >
            {props.content}
          </Markdown>
        </Col>
      </Row>
    </Container>
  )
}

async function getStaticProps({ params }) {
  const doc = fs
    .readFileSync(`blueprints/${params.category}/${params.id}/README.md`)
    .toString()
  const { data, content } = matter(doc)
  const tocData = toc(content).json
  return {
    props: { data, content, category: params.category, id: params.id, tocData },
  }
}

async function getStaticPaths() {
  /* scan all blueprint categories */
  const categories = fs
    .readdirSync('blueprints', { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => f.name)
  const paths = []
  categories.forEach((c) => {
    const blueprints = fs.readdirSync(`blueprints/${c}`)
    blueprints.forEach((b) => paths.push({ params: { category: c, id: b } }))
  })
  return {
    paths,
    fallback: false,
  }
}

export { getStaticProps, getStaticPaths }
export default Blueprint
