import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import ShowcaseRoll from '../components/ShowcaseRoll'
import Seo from '../components/seo'

export const RealizacjeTemplate = ({
  title: page
}) => (
  <Theme>
    <Seo page={page} />
    <Layout darktop>
      <ShowcaseRoll />
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <RealizacjeTemplate {...markdownRemark.frontmatter} />
  )
}

export const realizacjeQuery = graphql`
  query Realizacje {
    markdownRemark(frontmatter: { templateKey: { eq: "realizacje" } }) {
      frontmatter {
        title
      }
    }
  }
`
