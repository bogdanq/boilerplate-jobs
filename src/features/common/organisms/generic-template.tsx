import React from 'react'
import styled from 'styled-components'
import { Container } from 'ui'
import { Header } from 'features/header'
import { Chat } from 'features/chat'

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
      <Chat />
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
