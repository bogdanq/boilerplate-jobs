import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Image, Icon } from 'semantic-ui-react'
import { Container } from '../template'
import { Row } from '../../lib/styled-components-layout'
import logo from '../../assets/logo.png'
import { WithAccount } from '../../common'

export const Menu = () => {
  return (
    <Row width='70%' margin='0 auto'>
      <Image src={logo} />
      <Navigation />
    </Row>
  )
}

const MenuItem = ({ img, name, to }) => (
  <StyledNavLink to={to}>
    <Icon name={img} />
    {name}
  </StyledNavLink>
)

const Navigation = () => (
  <Container justify='space-around' align='center'>
    <MenuItem to='/' img='home' name='Главная' />
    <MenuItem to='/jobs' img='rub' name='Работа' />
    <MenuItem to='/summary' img='list' name='Вакансии' />
    <WithAccount renderExists={linksForUser} renderEmpty={linksForAnonym} />
  </Container>
)

const linksForUser = ({ account }) => (
  <>
    <MenuItem to='/settings' img='user circle' name='Профиль' />
    <MenuItem to='/jobs' img='log out' name='Выход' />
  </>
)

const linksForAnonym = () => (
  <>
    <MenuItem to='/summary' img='signup' name='Логин' />
    <MenuItem to='/jobs' img='sign-in' name='Вход' />
  </>
)

export const StyledNavLink = styled(NavLink)`
  color: #ebebeb;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  margin: 0 50px;
  padding-bottom: 8px;
  &.active {
    border-bottom: 2px solid #fdcc17;
  }
  &:hover {
    color: #ebebeb;
    border-bottom: 2px solid #fdcc17;
  }
`
