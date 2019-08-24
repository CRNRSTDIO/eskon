import React from 'react'
import * as styled from '../components/styled/IndexPage'

const IndexSolutions = ({ items }) => (
  <styled.Solutions>
    {items.map(({ heading, body }) => (
      <styled.SolutionsItem key={heading}>
        <styled.SolutionsItemHeading>{heading}</styled.SolutionsItemHeading>
        <styled.SolutionsItemDesc>{body}</styled.SolutionsItemDesc>
      </styled.SolutionsItem>
    ))}
  </styled.Solutions>
)

export default IndexSolutions
