import React from 'react'
import { LogoW } from '../SVG'
import * as styled from '../styled/CircularText'

const CircularText = ({ text = 'eskon est. 2008 dobrze zbudowane ', data: { globalJson: { logo } } }) => {
  const letters = [...text]
  const range = Array.from({ length: Math.ceil((360 + 1) / (360 / letters.length)) }, (_, i) => i * (360 / letters.length))

  return (
    <styled.CircularText>
      {range.map((origin, index) => (
        <styled.CircularTextNode
          key={index}
          style={{ transform: `translate(50%, -50%) rotate(${origin}deg)` }}
        >
          {letters[index]}
        </styled.CircularTextNode>
      ))}
      <styled.CircularTextImage>
        <LogoW />
      </styled.CircularTextImage>
    </styled.CircularText>
  )
}

export default CircularText
