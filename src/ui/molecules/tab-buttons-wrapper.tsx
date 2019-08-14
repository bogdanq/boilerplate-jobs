import React from 'react'
import styled from 'styled-components'
import { Row, Container } from 'ui'

type Props = {
  children: React.ReactNode
}

export const TabButtonsWrapper = ({ children }: Props) => {
  return (
    <TabContainerBox>
      <Row>
        <Container justify='center'>
          {children}
        </Container>
      </Row>
    </TabContainerBox>
  )
}

const TabContainerBox = styled.div`
  margin-top: 80px;
  text-align: center;
`