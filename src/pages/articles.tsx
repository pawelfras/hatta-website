import { graphql, Link } from 'gatsby'
import React from 'react'

interface ArticlePageProps {
  data: Data
}

interface Data {
  allMdx: AllMdx
}

interface AllMdx {
  nodes: Node[]
}

interface Node {
  frontmatter: Frontmatter
  excerpt: string
}

interface Frontmatter {
  title: string
  slug: string
  author: string
}

const ArticlesPage: React.FC<ArticlePageProps> = ({ data }) => (
  <div>
    <h1>Articles</h1>
    {data.allMdx.nodes.map(({ frontmatter, excerpt }) => (
      <div key={frontmatter.title}>
        <h2>{frontmatter.title}</h2>
        <p>{frontmatter.author}</p>
        <p>{excerpt}</p>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export default ArticlesPage
