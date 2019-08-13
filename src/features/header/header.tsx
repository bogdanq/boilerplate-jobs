import React from 'react'
import styled from 'styled-components'
import { Container } from 'ui'
import { Menu } from './organisms/menu'

type Props = {
  content?: React.ReactNode
}

export const Header = ({ content }: Props) => (
  <HeaderBox>
    <Container>
      <Menu />
      {content}
    </Container>
  </HeaderBox>
)

const HeaderBox = styled.div`
  min-height: 80px;
`
