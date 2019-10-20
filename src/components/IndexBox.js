import React from 'react'
import * as styled from './styled/IndexPage'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'

const IndexBox = ({ heading, body, cta }) => (
  <styled.Box to='/'>
    <styled.BoxHeading>
      <Heading inherit small as='h3'>{heading}</Heading>
    </styled.BoxHeading>
    <styled.BoxBody>
      <Paragraph inherit>{body}</Paragraph>
      <styled.BoxFakeLink inherit to='/'>{cta}</styled.BoxFakeLink>
    </styled.BoxBody>
  </styled.Box>
)

export default IndexBox
