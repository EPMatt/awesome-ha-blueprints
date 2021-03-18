import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import Head from 'next/head'
import TextIcon from '../../../components/TextIcon'
import Link from 'next/link'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import Highlight from 'react-highlight.js'
import FragmentWrapper from '../../../components/FragmentWrapper'
import Toc from '../../../components/Toc'
import TitleToc from '../../../components/TitleToc'
import toc from 'markdown-toc'
import { useMediaQuery } from 'react-responsive'
import { withInvisibleAnchor } from '../../../utils'
import Input from '../../../components/blueprints_docs/Input'
import Requirement from '../../../components/blueprints_docs/Requirement'
import BlueprintImportCard from '../../../components/BlueprintImportCard'

function Blueprint(props) {
  const lg = useMediaQuery({ query: '(min-width: 992px)' })
  return (
    <Container fluid className='px-md-4'>
      <Row className=''>
        <Col xs={12} lg={3} className='position-fixed sidebar left pr-5'>
          <BlueprintImportCard
            className='mb-4'
            category={props.category}
            id={props.id}
            style={{ maxWidth: 300 }}
          />
          <Toc data={props.tocData}></Toc>
        </Col>
        <Col xs={12} lg={8} className='offset-lg-3'>
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
                text={`Go back to ${props.category}`}
              />
            </Col>
          </Row>
          <Markdown
            options={{
              overrides: {
                pre: FragmentWrapper,
                h1: !lg && {
                  component: TitleToc,
                  props: {
                    data: props.tocData,
                    between: (
                      <BlueprintImportCard
                        className='mb-4'
                        category={props.category}
                        id={props.id}
                        style={{ maxWidth: 600 }}
                      />
                    ),
                  },
                },
                h2: withInvisibleAnchor('h2'),
                code: {
                  component: Highlight,
                  props: {
                    language: 'yaml',
                  },
                },
                Input: {
                  component: Input,
                },
                Requirement: {
                  component: Requirement,
                  props: {
                    refers: props.data.name,
                  },
                },
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
    const blueprints = fs
      .readdirSync(`blueprints/${c}`, { withFileTypes: true })
      .filter((f) => f.isDirectory())
    blueprints.forEach((b) =>
      paths.push({ params: { category: c, id: b.name } })
    )
  })
  return {
    paths,
    fallback: false,
  }
}

export { getStaticProps, getStaticPaths }
export default Blueprint
