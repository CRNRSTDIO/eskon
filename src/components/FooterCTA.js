import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Grid from './styled/Grid'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Link from './styled/Link'
import Icon from './Icons'
import * as styled from './styled/Footer'

const FooterCta = ({ data: { globalJson: { footer_cta: { heading, body, cta } } } }) => (
  <Grid>
    <styled.FooterCta>
      <Grid>
        <styled.FooterBoxesContainer>
          <styled.FooterBox>
            <Heading noline regular as='h3'>{heading}</Heading>
            <Paragraph>{body}</Paragraph>
          </styled.FooterBox>
          <styled.FooterBox alternate>
            <styled.FooterBoxLogo>
              <Icon name='logo' height='20px' />
            </styled.FooterBoxLogo>
            <Link to='/'>{cta}</Link>
          </styled.FooterBox>
        </styled.FooterBoxesContainer>
      </Grid>
    </styled.FooterCta>
  </Grid>
)

export default () => (
  <StaticQuery
    query={graphql`
      query FooterCtaQuery {
        globalJson {
          footer_cta {
            heading
            body
            cta
          }
        }
      }
    `}
    render={data => <FooterCta data={data} />}
  />
)
