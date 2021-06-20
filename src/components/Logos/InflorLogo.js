import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import styled from 'styled-components'

const AvatarWrapper = styled(Img)`
  border-radius: 25%;
  height: 4.75rem;
  margin: auto;
  width: 4.75rem;
  background: #fff;

  ${media.lessThan('large')`
    height: 4.875rem;
    width: 4.875rem;
    margin-top: 2px;
    margin-bottom: 10px;
  `}
`
const InflorLogo = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "inflor.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
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
