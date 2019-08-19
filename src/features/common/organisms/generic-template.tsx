import React from 'react'
import styled from 'styled-components'
import { Container } from 'ui'
import { Header } from 'features/header'

const Footer = () => (
  <FooterWrapper>
    <Container>
      <h1>DefaultFooter</h1>
    </Container>
  </FooterWrapper>
)

type Props = {
  hero: React.ReactNode
  children: React.ReactNode
}

export const GenericTemplate = ({ children, hero }: Props) => {
  return (
    <Container>
      <Header />
      {hero}
      {children}
      <Footer />
    </Container>
  )
}

const FooterWrapper = styled.div`
  background: #111111;
  height: 300px;
  color: #fff;
  margin-top: 50px;
`
