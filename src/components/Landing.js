import React from 'react'
import * as styled from './styled/Landing'
import Grid from './styled/Grid'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Columns from './styled/Columns'

const Landing = ({ center, heading, body, boxes, style, ...size }) => (
  <styled.Landing style={style}>
    <Grid center={center}>
      <styled.LandingHeadingContainer>
        <Heading {...size} as='h1'>{heading}</Heading>
      </styled.LandingHeadingContainer>
      {boxes}
      {body && (
        <Columns>
          <Paragraph>{body}</Paragraph>
        </Columns>
      )}
    </Grid>
  </styled.Landing>
)

export default Landing
