import React from 'react'
import ReactDom from 'react-dom'
import useOnClickOutside from 'use-onclickoutside'
import { MenuItem } from 'features/header'

export type Fields = 'div' | 'span' | 'ul'

type Props = {
  as: Fields | React.ComponentType<any>
  menu: (args: { close: React.Dispatch<void> }) => React.ReactNode
}

export const ToggleMenu = ({ as: TagName, menu }: Props) => {
  const rootElement = document.querySelector('#context-menu')
  const [opened, toggle] = React.useReducer(prev => !prev, false)
  const menuRef = React.useRef(null)
  useOnClickOutside(menuRef, toggle)

  return (
    <>
      <MenuItem as={TagName} img='sign-in' name='Профиль' onClick={toggle} />
      {opened &&
        rootElement &&
        ReactDom.createPortal(
          <div ref={menuRef}>{menu({ close: toggle })}</div>,
          rootElement,
        )}
    </>
  )
}
