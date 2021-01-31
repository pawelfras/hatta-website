import React from "react"
import Button from "../components/buttons/button"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import { graphql, PageProps } from "gatsby"
import Post from "../components/post/post"

const ContentWrapper = styled.div`
  width: 60%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  object-fit: cover;
`

export interface IndexPageProps extends PageProps {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      <Post></Post>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1800, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
