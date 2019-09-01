import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import Grid from '../components/styled/Grid'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'
import Img from 'gatsby-image'

export const DomyPodKluczTemplate = ({
  landing
}) => (
  <Theme>
    <Layout>
      <Landing
        center
        medium
        {...landing}
      />
    </Layout>
    <Section>
      <Heading dark regular as='h3'>{section}</Heading>
    </Section>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <DomyPodKluczTemplate {...markdownRemark.frontmatter} />
  )
}

export const domyPodKluczQuery = graphql`
  query DomyPodKlucz {
    markdownRemark(frontmatter: { templateKey: { eq: "domy-pod-klucz" } }) {
      frontmatter {
        landing {
          heading
          body
        }
        section01 {
          heading
          body
          accordions {
            heading
            body
            isOpen
          }
        }
        section02 {
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          body
        }
      }
    }
  }
`
