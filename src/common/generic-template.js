import React from 'react'
import { Container, Menu } from '../ui'

const DefaultHeader = () => (
  <Container>
    <h1>DefaultHeader</h1>
    <Menu />
  </Container>
)

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
