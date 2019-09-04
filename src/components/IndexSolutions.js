import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Icon from '../components/Icons'
import * as styled from '../components/styled/IndexPage'

const IndexSolutions = ({ items }) => (
  <styled.Solutions>
      <Row>
        {items.map(({ heading, body, icon }, index) => (
          <Col key={index} xs={2} sm={2} offset={{ sm: 1, md: 0 }} md={2}>
            <styled.SolutionsItem>
              <Icon name={icon} height='50px' />
              <styled.SolutionsItemHeading>{heading}</styled.SolutionsItemHeading>
              <styled.SolutionsItemDesc>{body}</styled.SolutionsItemDesc>
            </styled.SolutionsItem>
          </Col>
        ))}
      </Row>
  </styled.Solutions>
)

export default IndexSolutions
