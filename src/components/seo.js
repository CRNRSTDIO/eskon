import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO ({ page, lang = 'pl' }) {
  const { globalJson: { seo: { title, descr } } } = useStaticQuery(
    graphql`
      query SEO {
        globalJson {
          seo {
            title
            descr
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={`${page} - ${title}`}
      meta={[
        {
          name: 'description',
          content: descr
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: descr
        },
        {
          property: 'og:type',
          contenet: 'website'
        }
      ]}
    />
  )
}

export default SEO
