import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import Grid from '../components/styled/Grid'
import * as styled from '../components/styled/IndexPage'
import IndexBox from '../components/IndexBox'
import Counters from '../components/Counters'
import Solutions from '../components/IndexSolutions'
import Landing from '../components/Landing'

export const IndexTemplate = ({
  landing,
  counters,
  section01,
  section02,
  section03
}) => (
  <Theme>
    <Layout>
      <Landing
        center
        huge
        {...landing}
        boxes={(
          <styled.BoxesContainer>
            <IndexBox offset {...landing.box01} />
            <IndexBox alternate {...landing.box02} />
          </styled.BoxesContainer>
        )}
      />
      <Grid>
        <styled.Column offset>
          <Heading dark regular as='h3'>{section01.heading}</Heading>
        </styled.Column>
        <styled.Column>
          <Paragraph dark>{section01.body}</Paragraph>
        </styled.Column>
      </Grid>
      <styled.ImageContainer>
        <Grid>
          <styled.ImageWrapper />
        </Grid>
      </styled.ImageContainer>
      <Grid>
        <styled.Column offset>
          <Heading dark regular as='h3'>{section02.heading}</Heading>
          <Paragraph dark>{section02.body}</Paragraph>
        </styled.Column>
        <Counters counters={counters} />
      </Grid>
      <Grid>
        <styled.Column offset>
          <Heading dark regular noline as='h3'>{section03.heading}</Heading>
          <Paragraph dark>{section03.body}</Paragraph>
        </styled.Column>
        <Solutions items={section03.items} />
      </Grid>
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <IndexTemplate {...markdownRemark.frontmatter}/>
  )
}

export const indexPageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        landing {
          heading
          box01 {
            heading
            body
            cta
          }
          box02 {
            heading
            body
            cta
          }
        }
        section01 {
          heading
          body
        }
        section02 {
          heading
          body
        }
        counters {
          desc
          value
          desc
          value
          desc
          value
        }
        section03 {
          heading
          body
          items {
            heading
            body
            heading
            body
            heading
            body
            heading
            body
          }
        }
      }
    }
  }
`
