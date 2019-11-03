import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

export const Section00 = styled.section`
  height: 12.5rem;
  margin: 8.125rem 0 0;
  position: relative;
  z-index: 1;

  ${({ theme: { queries } }) => queries.sm`
    height: 18.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    height: 32rem;
  `}
`

export const Section00Image = styled(Img)`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;

  ${({ theme: { queries } }) => queries.sm`
    margin: 0 auto;
    max-width: 40rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    max-width: 68rem;
  `}
`

export const Section00Helmet = styled(Img)`
  position: absolute;
  right: -11.75rem;
  top: 1.25rem;
  width: 23.5rem;
  z-index: 10;

  ${({ theme: { queries } }) => queries.sm`
    right: 0;
    top: 50%;
  `}

  ${({ theme: { queries } }) => queries.md`
    display: none;
  `}
`

export const Section01Wrapper = styled.div`
  background-color: ${({ theme: { white } }) => white};
  padding: 3rem 0 1rem;
`

export const Section01 = styled.section`
  padding: 4.5rem 0 5.75rem;
  position: relative;
  z-index: 2;

  ${({ theme: { queries } }) => queries.md`
    margin-top: -17.5rem;
  `}
`

export const Section01Heading = styled.h2`
  align-self: flex-start;
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: 2.625rem;
  font-weight: 300;
  margin: 0 0 1.5rem;
  padding: 0 0 1.5rem;
  position: relative;

  ::after {
    background-color: ${({ theme: { grey3 } }) => grey3};
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`

export const Section01Body = styled.div`
  color: ${({ theme: { dark2 } }) => dark2};
  font-family: 'Roboto';
  font-size: 1.25rem;

  p {
    margin: 0;

    + p {
      margin-top: .5rem;
    }
  }

  a {
    color: ${({ theme: { blue2 } }) => blue2};
  }
`

export const Section02 = styled.section``

export const Section02Heading = styled(Section01Heading)``

export const Section02Body = styled.div`
  color: ${({ theme: { dark2 } }) => dark2};
  font-family: 'Roboto';
  font-size: .9375rem;
  margin: 0 0 4.25rem;
`

export const Section02Form = styled.form`
  background-color: ${({ theme: { grey0 } }) => grey0};
  box-sizing: border-box;
  padding: 4.5rem 0;

  * {
    box-sizing: inherit;
  }

  ${({ theme: { queries } }) => queries.md`
    background-color: transparent;
    padding: 0;
    position: relative;
    z-index: 1;

    ::before {
      background-color: ${({ theme: { dark1 } }) => dark1};
      bottom: 0;
      content: '';
      height: 11.25rem;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      width: 100vw;
      z-index: -1;
    }
  `}
`

export const Section02FormBackground = styled.div`
${({ first, last, theme: { queries } }) => queries.md`
  background-color: ${({ theme: { grey0 } }) => grey0};

  ${first && css`
    padding: 5.125rem 0 0;
  `}

  ${last && css`
    padding: 0 0 7.625rem;
  `}
`}
`

export const Section02FormSection = styled.div`
  margin: 0 0 2.25rem;
`

export const Section02FormError = styled.div`
  bottom: .25rem;
  font-family: 'Roboto';
  font-size: .6875rem;
  position: absolute;
`

export const Section02FakeLabel = styled.p`
  color: ${({ theme: { dark2 } }) => dark2};
  font-family: 'Roboto';
  font-size: .9375rem;
  font-weight: 700;
  margin: 0 0 1.5rem;

  ::after {
    color: ${({ theme: { blue2 } }) => blue2};
    content: ' *';
  }
`

export const Section02RadioWrapper = styled.div`
  padding: 1rem 0;
  position: relative;

  ::after {
    background-color: ${({ theme: { grey3 } }) => grey3};
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
  }
`

export const Section02RadioLabel = styled.label`
  color: ${({ theme: { grey4 } }) => grey4};
  display: block;
  font-family: 'Roboto';
  font-size: .8125rem;
  padding: 0 0 0 2rem;
  position: relative;

  ::after,
  ::before {
    border-radius: 50%;
    content: '';
    left: .5rem;
    position: absolute;
    top: .125rem;
    transition: all .15s ease-in-out;
  }

  ::after {
    background-color: ${({ theme: { blue2 } }) => blue2};
    height: 1.375rem;
    left: .1875rem;
    opacity: 0;
    top: -.1875rem;
    width: 1.375rem;
    z-index: 1;
  }

  ::before {
    background-color: ${({ theme: { grey3 } }) => grey3};
    height: .75rem;
    width: .75rem;
    z-index: 2;
  }
`

export const Section02Radio = styled.input.attrs({
  type: 'radio',
  name: 'rodzaj'
})`
  opacity: 0;
  position: absolute;
  pointer-events: none;

  :checked + ${Section02RadioLabel} {
    ::before {
      background-color: ${({ theme: { blue2 } }) => blue2};
    }
    ::after {
      opacity: .2;
    }
  }
`

export const Section02Input = styled.input.attrs({
  type: 'text'
})`
  background-color: ${({ theme: { white } }) => white};
  border: ${({ theme: { grey3 } }) => `1px solid ${grey3}`};
  color: ${({ theme: { dark2 } }) => dark2};
  font-size: 1.125rem;
  height: 3.125rem;
  margin: 0 0 1.25rem;
  padding: 0 1.375rem;
  width: 100%;

  ::placeholder {
    color: ${({ theme: { grey4 } }) => grey4};
    font-size: .9375rem;
  }
`

export const Section02CheckboxWrapper = styled.div`
  padding: 0 0 1.25rem;
  position: relative;
`

export const Section02CheckboxLabel = styled.label`
  color: ${({ theme: { grey4 } }) => grey4};
  display: block;
  font-family: 'Roboto';
  font-size: .6875rem;
  padding: 0 0 0 1.5rem;
  position: relative;

  ::after,
  ::before {
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    transition: all .15s ease-in-out;
  }

  ::after {
    border: ${({ theme: { grey4 } }) => `1px solid ${grey4}`};
    height: .875rem;
    width: .875rem;
  }

  ::before {
    background-color: ${({ theme: { blue2 } }) => blue2};
    height: .625rem;
    left: .1875rem;
    opacity: 0;
    top: .1875rem;
    width: .625rem;
  }
`

export const Section02Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  :checked + ${Section02CheckboxLabel} {

    ::before {
      opacity: 1;
    }
  }
`

export const Section02Textarea = styled.textarea`
  background-color: ${({ theme: { white } }) => white};
  border: ${({ theme: { grey3 } }) => `1px solid ${grey3}`};
  color: ${({ theme: { dark2 } }) => dark2};
  font-size: 1.125rem;
  height: 3.125rem;
  margin: 0 0 1.25rem;
  padding: .9375rem 1.375rem;
  width: 100%;

  ::placeholder {
    color: ${({ theme: { grey4 } }) => grey4};
    font-size: .9375rem;
  }
`

export const Section02InputWrapper = styled.div`
  position: relative;
`

export const Section02Label = styled.label`
  position: absolute;
`

export const Section02Submit = styled.input.attrs({
  type: 'submit',
  value: 'Wyślij'
})`
  background-color: ${({ theme: { blue2 } }) => blue2};
  border: 0;
  border-radius: 0;
  color: ${({ theme: { white } }) => white};
  font-family: 'Roboto';
  font-size: .9375rem;
  height: 3.4375rem;
`

export const Section02Accordion = styled.div`
  color: ${({ theme: { grey4 } }) => grey4};
  font-family: 'Roboto';
  font-size: .6875rem;
  margin: .5rem 0 0 1.5rem;
`

export const Section02AccordionHeader = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  border: 0;
  color: ${({ theme: { grey4 } }) => grey4};
  font-family: 'Roboto';
  font-size: .4375rem;
  letter-spacing: 1px;
  margin: 0;
  outline: none;
  padding: 0 0 .25rem;
  position: relative;
  text-transform: uppercase;

  ::after {
    background-color: ${({ theme: { grey4 } }) => grey4};
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    width: 100%;
  }
`
