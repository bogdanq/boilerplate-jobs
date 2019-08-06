import React, { ReactNode } from 'react'
import { Container } from '../../../ui'

const Footer = () => (
  <Container>
    <h1>DefaultFooter</h1>
  </Container>
)

type Props = {
  header: ReactNode
  footer?: ReactNode
  content: ReactNode
}

export const GenericTemplate = ({
  header,
  footer = <Footer />,
  content,
}: Props) => {
  return (
    <Container>
      {header}
      {content}
      {footer}
    </Container>
  )
}
