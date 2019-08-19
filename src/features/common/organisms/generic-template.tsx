import React from 'react'
import { Container } from '../../../ui'
import { Header } from 'features/header'

const Footer = () => (
  <Container>
    <h1>DefaultFooter</h1>
  </Container>
)

type Props = {
  hero: React.ReactNode
  children: React.ReactNode
}

export const GenericTemplate = ({
  children,
  hero,
}: Props) => {
  return (
    <Container>
      <Header />
      {hero}
      {children}
      <Footer />
    </Container>
  )
}
