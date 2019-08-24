import React from 'react'
import { IndexTemplate } from '../../templates/index-page'

const Index = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <IndexTemplate {...data}/>
}

export default Index
