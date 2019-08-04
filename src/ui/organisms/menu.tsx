import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'
import { Container } from '../template'
import { Row } from '../../lib/styled-components-layout'
import { ToggleMenu } from '../../lib/drop-menu'
import logo from '../../assets/logo.png'
import { WithAccount } from '../../features/common'
import { MenuItem } from '../atoms'

export const Menu = () => {
  return (
    <Row width='70%' margin='0 auto'>
      <Image src={logo} />
      <Navigation />
    </Row>
  )
}

const Navigation = () => (
  <Container justify='space-around' align='center'>
    <MenuItem as={StyledNavLink} to='/' img='home' name='Главная' />
    <MenuItem as={StyledNavLink} to='/jobs' img='rub' name='Работа' />
    <MenuItem as={StyledNavLink} to='/summary' img='list' name='Вакансии' />
    <WithAccount renderExists={linksForUser} renderEmpty={linksForAnonym} />
  </Container>
)

const linksForUser = () => (
  <>
    <ToggleMenu
      as={Link}
      menu={({ close }) => (
        <>
          <MenuItem
            as={StyledNavLink}
            to='/settings'
            img='signup'
            name='Настройки'
            onClick={close}
          />
          <MenuItem
            as={StyledNavLink}
            to='/jobs'
            img='sign-in'
            name='Кабинет'
            onClick={close}
          />
          <MenuItem
            as={StyledNavLink}
            to='/out'
            img='log out'
            name='Выход'
            onClick={close}
          />
        </>
      )}
    />
  </>
)

const linksForAnonym = () => (
  <>
    <MenuItem as={StyledNavLink} to='/summary' img='signup' name='Логин' />
    <MenuItem as={StyledNavLink} to='/jobs' img='sign-in' name='Вход' />
  </>
)

const Link = styled.a`
  color: #ebebeb;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  margin: 0 50px;
  padding-bottom: 8px;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #fdcc17;
  }
  &:hover {
    color: #ebebeb;
    border-bottom: 2px solid #fdcc17;
  }
`

const StyledNavLink = Link.withComponent(NavLink)
