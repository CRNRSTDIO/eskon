import React from 'react'
import * as styled from './styled/IndexPage'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Link from './styled/Link'

const IndexBox = ({ alternate, heading, body, cta }) => (
  <styled.Box alternate={alternate}>
    <styled.BoxHeading alternate={alternate}>
      <Heading inherit small as='h3'>{heading}</Heading>
    </styled.BoxHeading>
    <styled.BoxBody alternate={alternate}>
      <Paragraph inherit>{body}</Paragraph>
      <Link inherit to='/'>{cta}</Link>
    </styled.BoxBody>
  </styled.Box>
)

export default IndexBox
