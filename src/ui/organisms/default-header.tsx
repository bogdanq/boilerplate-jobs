import React from 'react'
import styled from 'styled-components'
import { Container, Menu } from '../index'

export const DefaultHeader = () => (
  <HeaderBox>
    <Container>
      <Menu />
      <Content />
    </Container>
  </HeaderBox>
)

const HeaderBox = styled.div`
  background: #111111;
  height: 700px;
`
const Content = () => null
