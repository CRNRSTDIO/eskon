import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import { Container, Row, Col } from 'react-grid-system'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'
import Img from 'gatsby-image'

export const DomyPodKluczTemplate = ({
  landing,
  domySection01,
  image,
  domySection02
}) => (
  <Theme>
    <Layout>
      <Landing
        center
        medium
        {...landing}
      />
      <Section>
          <Heading dark regular as='h3'>{domySection01.heading}</Heading>
      </Section>
    </Layout>
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
        domySection01 {
          heading
          body
          accordions {
            heading
            body
            isOpen
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        domySection02 {
          heading
          body
        }
      }
    }
  }
`
