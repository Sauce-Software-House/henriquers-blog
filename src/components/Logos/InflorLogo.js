import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import media from "styled-media-query"
import Img from "gatsby-image"
import styled from "styled-components"

const AvatarWrapper = styled(Img)`
  border-radius: 25%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
  background: #fff;

  ${media.lessThan("large")`
  height: 1.875rem;
  width: 1.875rem;
  `}
`
const InflorLogo = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "inflor.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default InflorLogo
