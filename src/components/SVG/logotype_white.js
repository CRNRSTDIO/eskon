import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "Logotype_white.svg" }) {
        publicURL
      }
    }
  `)

  return <img src={data.icon.publicURL} alt='Eskon logo' />
}

export default Logo
