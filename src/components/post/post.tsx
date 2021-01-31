import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"

interface IPostProps {
  site: {
    siteMetadata: {
      description
    }
  }
}

const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`

const Post: React.FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { description },
    },
  } = useStaticQuery<IPostProps>(query)
  return <p>{description}</p>
}

export default Post
