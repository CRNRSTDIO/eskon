import React from 'react'
import * as styled from './styled/IndexPage'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Link from './styled/Link'

const IndexBox = ({ alternate, heading, body, cta }) => (
  <styled.Box alternate={alternate}>
    <styled.BoxHeading alternate={alternate}>
      <Heading dark={alternate} small as='h3'>{heading}</Heading>
    </styled.BoxHeading>
    <styled.BoxBody>
      <Paragraph dark={alternate}>{body}</Paragraph>
      <Link blue={alternate} to='/'>{cta}</Link>
    </styled.BoxBody>
  </styled.Box>
)

export default IndexBox
