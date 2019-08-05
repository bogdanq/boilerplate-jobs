import React from 'react'
import styled from 'styled-components'
import img from '../../assets/after.png'
import { DropMenuItem, StyledNavLink, Col } from '../'

type Props = {
  close: React.Dispatch<void>
}

export const DropDownMenu = ({ close }: Props) => {
  return (
    <MenuBox>
      <Col>
        <DropMenuItem
          as={StyledNavLink}
          to='/settings'
          img='signup'
          name='Настройки'
          onClick={close}
        />
        <DropMenuItem
          as={StyledNavLink}
          to='/jobs'
          img='sign-in'
          name='Кабинет'
          onClick={close}
        />
        <DropMenuItem
          as={StyledNavLink}
          to='/out'
          img='log out'
          name='Выход'
          onClick={close}
        />
      </Col>
    </MenuBox>
  )
}

const MenuBox = styled.div`
  background: #fff;
  position: absolute;
  top: 85px;
  right: 22%;
  border-radius: 15px;
  box-shadow: 2px 10px 21px -12px rgba(0, 0, 0, 1);
  padding: 25px 0;
  z-index: 10;
  & a {
    color: #707070;
  }
  &:after {
    content: '';
    position: absolute;
    background: url(${img});
    background-position: center;
    top: -24px;
    right: 15px;
    width: 30px;
    height: 25px;
  }
`
