import React from 'react'
import { Container } from '../../../ui'

const Footer = () => (
  <Container>
    <h1>DefaultFooter</h1>
  </Container>
)

type Props = {
  header: React.ReactNode
  hero: React.ReactNode
  footer?: React.ReactNode
  content: React.ReactNode
}

export const GenericTemplate = ({
  header,
  footer = <Footer />,
  content,
  hero,
}: Props) => {
  return (
    <Container>
      {header}
      {hero}
      {content}
      {footer}
    </Container>
  )
}
