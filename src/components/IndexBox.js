import React from 'react'
import * as styled from './styled/IndexPage'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'

const IndexBox = ({ alternate, heading, body, cta }) => (
  <styled.Box alternate={alternate} to='/'>
    <styled.BoxHeading alternate={alternate}>
      <Heading inherit small as='h3'>{heading}</Heading>
    </styled.BoxHeading>
    <styled.BoxBody alternate={alternate}>
      <Paragraph inherit>{body}</Paragraph>
      <styled.BoxFakeLink alternate={alternate} inherit to='/'>{cta}</styled.BoxFakeLink>
    </styled.BoxBody>
  </styled.Box>
)

export default IndexBox
