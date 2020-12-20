import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

function Home(props) {
  return (
    <div>
      <Head>
        <title>Awesome HA Blueprints</title>
      </Head>
      <Markdown>{props.content}</Markdown>
    </div>
  )
}

function getStaticProps() {
  const doc = fs.readFileSync(`README.md`).toString()
  const { data, content } = matter(doc)
  return {
    props: { data, content },
  }
}

export { getStaticProps }
export default Home
