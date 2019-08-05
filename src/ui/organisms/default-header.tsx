import React from 'react'
import styled from 'styled-components'
import { Container, Menu } from '../'

export const DefaultHeader = () => (
  <HeaderBox>
    <Container>
      <Menu />
      <Content />
    </Container>
  </HeaderBox>
)

const HeaderBox = styled.div`
  height: 700px;
`
const Content = () => <h1>Content</h1>
