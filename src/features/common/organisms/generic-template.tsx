import React, { ReactNode } from 'react'
import { Container, DefaultHeader } from '../../../ui'

const DefaultFooter = () => (
  <Container>
    <h1>DefaultFooter</h1>
  </Container>
)

type Props = {
  header?: ReactNode
  footer?: ReactNode
  content: ReactNode
}

export const GenericTemplate = ({
  header = <DefaultHeader />,
  footer = <DefaultFooter />,
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
