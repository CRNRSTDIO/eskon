import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import * as styled from '../components/styled/IndexPageSolutions'

const IndexSolutions = ({ items }) => (
  <styled.Solutions>
    <Row>
      {items.map(({ heading, body, icon }, index) => (
        <Col key={index} xs={2} sm={2} offset={{ sm: 1, md: 0 }} md={2}>
          <styled.SolutionsItem>
            <styled.SolutionsItemIcon>
              <img src={icon.publicURL} />
            </styled.SolutionsItemIcon>
            <styled.SolutionsItemHeading>{heading}</styled.SolutionsItemHeading>
            <styled.SolutionsItemDesc>{body}</styled.SolutionsItemDesc>
          </styled.SolutionsItem>
        </Col>
      ))}
    </Row>
  </styled.Solutions>
)

export default IndexSolutions
