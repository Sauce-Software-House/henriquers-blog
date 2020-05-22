import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => {
  useEffect(() => {
    navigate("/about/")
  }, [])

  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  )
}

export default SearchPage
