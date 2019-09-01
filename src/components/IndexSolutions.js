import React from 'react'
import Icon from '../components/Icons'
import * as styled from '../components/styled/IndexPage'

const IndexSolutions = ({ items }) => (
  <styled.Solutions>
    {items.map(({ heading, body, icon }) => (
      <styled.SolutionsItem key={heading}>
        <Icon name={icon} height='50px' />
        <styled.SolutionsItemHeading>{heading}</styled.SolutionsItemHeading>
        <styled.SolutionsItemDesc>{body}</styled.SolutionsItemDesc>
      </styled.SolutionsItem>
    ))}
  </styled.Solutions>
)

export default IndexSolutions
