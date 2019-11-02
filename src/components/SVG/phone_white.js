import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Phone = () => {
  const data = useStaticQuery(graphql`
    query {
      phoneIcon: file(relativePath: { eq: "Phone_white.svg" }) {
        publicURL
      }
    }
  `)

  return <img src={data.phoneIcon.publicURL} alt='Telefon' />
}

export default Phone
