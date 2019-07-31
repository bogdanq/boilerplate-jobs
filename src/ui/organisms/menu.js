import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../template'
import styled from 'styled-components'
import { Row } from '../../lib/styled-components-layout'

export const Menu = () => {
  return (
    <Row width='200px'>
      <Container justify='space-around'>
        <StyledNavLink to='/'>home</StyledNavLink>
        <StyledNavLink to='/jobs'>jobs</StyledNavLink>
        <StyledNavLink to='/summary'>summary</StyledNavLink>
      </Container>
    </Row>
  )
}

export const StyledNavLink = styled(NavLink)`
  color: red;
  text-decoration: none;
  &.active {
    color: green;
  }
`
