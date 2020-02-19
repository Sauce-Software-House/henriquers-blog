import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    backgrounbd={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
)

export default Hit
