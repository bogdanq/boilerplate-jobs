import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled.a`
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
    color: #c4c4c4;
    border-bottom: 2px solid #fdcc17;
  }
`

export const StyledNavLink = Link.withComponent(NavLink)
