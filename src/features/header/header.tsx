import React from 'react'
import styled from 'styled-components'
import { Container } from 'ui'
import { Menu } from './organisms/menu'

export const Header = () => (
  <HeaderBox>
    <Container>
      <Menu />
    </Container>
  </HeaderBox>
)

const HeaderBox = styled.div`
  min-height: 80px;
`
