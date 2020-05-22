import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

// import { initGA } from "../config/ga"

const BlogList = props => {
  useEffect(() => {
    navigate("/about/")
    // initGA()
  }, [])

  const postList = props.data.allMarkdownRemark.edges

  let { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.length > 0 &&
          postList.map(
            (
              {
                node: {
                  frontmatter: {
                    background,
                    category,
                    date,
                    description,
                    title,
                  },
                  timeToRead,
                  fields: { slug },
                },
              },
              index
            ) => (
              <PostItem
                slug={slug}
                title={title}
                background={background}
                category={category}
                date={date}
                timeToRead={timeToRead}
                description={description}
                key={index}
              />
            )
          )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
