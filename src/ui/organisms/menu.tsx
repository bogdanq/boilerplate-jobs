import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'
import { Container } from '../template'
import { ToggleMenu } from '../../lib/drop-menu'
import logo from '../../assets/logo.png'
import { WithAccount } from '../../features/common'
import { MenuItem, StyledNavLink, Link, Row, DropDownMenu } from '../'

export const Menu = () => {
  return (
    <MenuWrapper>
      <Row width='1200px'>
        <Image src={logo} />
        <Navigation />
      </Row>
    </MenuWrapper>
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
      menu={({ close }) => <DropDownMenu close={close} />}
    />
  </>
)

const linksForAnonym = () => (
  <>
    <MenuItem as={StyledNavLink} to='/summary' img='signup' name='Логин' />
    <MenuItem as={StyledNavLink} to='/jobs' img='sign-in' name='Вход' />
  </>
)

const MenuWrapper = styled.div`
  background: #111111;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
