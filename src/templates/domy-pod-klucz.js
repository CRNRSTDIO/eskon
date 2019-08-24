import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Landing from '../components/Landing'

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
      }
    }
  }
`
