import React from 'react'
import { Container, DefaultHeader } from '../../ui'

const DefaultFooter = () => (
  <Container>
    <h1>DefaultFooter</h1>
  </Container>
)

export const GenericTemplate = ({
  header = <DefaultHeader />,
  footer = <DefaultFooter />,
  content,
}) => {
  return (
    <Container>
      {header}
      {content}
      {footer}
    </Container>
  )
}
