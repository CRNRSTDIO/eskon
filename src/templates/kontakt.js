import React from 'react'
import { graphql } from 'gatsby'
import useForm from 'react-hook-form'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import MarkdownContent from '../components/MarkdownContent'
import KontaktAccordion from '../components/KontaktAccordion'
import * as styled from '../components/styled/Kontakt'

export const Kontakt = ({
  kontaktSection01,
  kontaktSection02
}) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Theme>
      <Layout nocta darktop>
        <styled.Section00>
          <Container>
            <styled.Section00Image
              fluid={kontaktSection01.image.childImageSharp.fluid}
              style={{
                position: 'absolute'
              }}
            />
            <styled.Section00Helmet
              fluid={kontaktSection01.helmet.childImageSharp.fluid}
              style={{
                position: 'absolute'
              }}
            />
          </Container>
        </styled.Section00>
        <styled.Section01>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={8}>
                <styled.Section01Wrapper>
                  <Row>
                    <Col xs={4} offset={{ md: 1 }} md={10}>
                      <styled.Section01Heading>
                        {kontaktSection01.heading}
                      </styled.Section01Heading>
                      <styled.Section01Body>
                        <MarkdownContent
                          content={kontaktSection01.body}
                        />
                      </styled.Section01Body>
                    </Col>
                  </Row>
                </styled.Section01Wrapper>
              </Col>
            </Row>
          </Container>
        </styled.Section01>
        <styled.Section02>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={8}>
                <Row>
                  <Col xs={4} offset={{ md: 1 }} md={10}>
                    <styled.Section02Heading>
                      {kontaktSection02.heading}
                    </styled.Section02Heading>
                    <styled.Section02Body>
                      {kontaktSection02.body}
                    </styled.Section02Body>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <styled.Section02Form
            onSubmit={handleSubmit(onSubmit)}
            name='kontakt'
            method='post'
            data-netlify='true'
          >
            <Container>
              <Row>
                <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={8}>
                  <styled.Section02FormBackground first>
                    <Row>
                      <Col xs={4} offset={{ md: 1 }} md={10}>
                        <styled.Section02FormSection>
                          <styled.Section02FakeLabel>
                            Rodzaj projektu
                          </styled.Section02FakeLabel>
                          {kontaktSection02.options.map(({ option }) => (
                            <styled.Section02RadioWrapper key={option}>
                              <styled.Section02Radio id={option} value={option} ref={register({ required: true })} />
                              <styled.Section02RadioLabel htmlFor={option}>{option}</styled.Section02RadioLabel>
                              {errors.rodzaj && (
                                <styled.Section02FormError>
                                  Pole wymagane
                                </styled.Section02FormError>
                              )}
                            </styled.Section02RadioWrapper>
                          ))}
                        </styled.Section02FormSection>
                        <styled.Section02FormSection>
                          <Row>
                            <Col xs={4}>
                              <styled.Section02FakeLabel>
                                Imię i nazwisko
                              </styled.Section02FakeLabel>
                            </Col>
                            <Col xs={4} sm={4}>
                              <styled.Section02InputWrapper>
                                <styled.Section02Input name='imie' ref={register({ required: true })} placeholder='Imię' />
                                {errors.imie && (
                                  <styled.Section02FormError>
                                    Pole wymagane
                                  </styled.Section02FormError>
                                )}
                              </styled.Section02InputWrapper>
                            </Col>
                            <Col xs={4} sm={4}>
                              <styled.Section02InputWrapper>
                                <styled.Section02Input name='nazwisko' ref={register({ required: true })} placeholder='Nazwisko' />
                                {errors.nazwisko && (
                                  <styled.Section02FormError>
                                    Pole wymagane
                                  </styled.Section02FormError>
                                )}
                              </styled.Section02InputWrapper>
                            </Col>
                          </Row>
                        </styled.Section02FormSection>
                        <styled.Section02FormSection>
                          <Row>
                            <Col xs={4}>
                              <styled.Section02FakeLabel>
                                Info
                              </styled.Section02FakeLabel>
                            </Col>
                            <Col xs={4} sm={4}>
                              <styled.Section02InputWrapper>
                                <styled.Section02Input name='email' ref={register({ required: true })} placeholder='Adres Email' />
                                {errors.email && (
                                  <styled.Section02FormError>
                                    Pole wymagane
                                  </styled.Section02FormError>
                                )}
                              </styled.Section02InputWrapper>
                            </Col>
                            <Col xs={4} sm={4}>
                              <styled.Section02InputWrapper>
                                <styled.Section02Input name='telefon' ref={register({ required: true })} placeholder='Nr telefonu' />
                                {errors.telefon && (
                                  <styled.Section02FormError>
                                    Pole wymagane
                                  </styled.Section02FormError>
                                )}
                              </styled.Section02InputWrapper>
                            </Col>
                          </Row>
                        </styled.Section02FormSection>
                        <styled.Section02FormSection>
                          <Row>
                            <Col xs={4}>
                              <styled.Section02FakeLabel>
                                Wiadomość
                              </styled.Section02FakeLabel>
                            </Col>
                            <Col xs={4}>
                              <styled.Section02InputWrapper>
                                <styled.Section02Textarea name='wiadomosc' ref={register({ required: true })} />
                                {errors.wiadomosc && (
                                  <styled.Section02FormError>
                                    Pole wymagane
                                  </styled.Section02FormError>
                                )}
                              </styled.Section02InputWrapper>
                            </Col>
                          </Row>
                        </styled.Section02FormSection>
                      </Col>
                    </Row>
                  </styled.Section02FormBackground>
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={8}>
                  <styled.Section02FormBackground>
                    <Row>
                      <Col xs={4} offset={{ md: 1 }} md={10}>
                        <styled.Section02CheckboxWrapper>
                          <styled.Section02Checkbox id='rodo' name='rodo' ref={register({ required: true })} />
                          <styled.Section02CheckboxLabel htmlFor='rodo'>
                            Lorem ipsum
                          </styled.Section02CheckboxLabel>
                          <styled.Section02Accordion>
                            <KontaktAccordion body='asdasd' />
                          </styled.Section02Accordion>
                          {errors.rodo && (
                            <styled.Section02FormError>
                              Pole wymagane
                            </styled.Section02FormError>
                          )}
                        </styled.Section02CheckboxWrapper>
                      </Col>
                    </Row>
                  </styled.Section02FormBackground>
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={8}>
                  <styled.Section02FormBackground last>
                    <Row>
                      <Col xs={4} offset={{ md: 1 }} md={5}>
                        <styled.Section02Submit />
                      </Col>
                    </Row>
                  </styled.Section02FormBackground>
                </Col>
              </Row>
            </Container>
          </styled.Section02Form>
        </styled.Section02>
      </Layout>
    </Theme>
  )
}

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <Kontakt {...markdownRemark.frontmatter} />
  )
}

export const kontaktQuery = graphql`
  query KontaktQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "kontakt" } }) {
      frontmatter {
        kontaktSection01 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          helmet {
            childImageSharp {
              fluid(maxWidth: 710) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        kontaktSection02 {
          heading
          body
          options {
            option
          }
        }
      }
    }
  }
`
