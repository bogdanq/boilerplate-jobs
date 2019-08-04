import React, { ComponentType, Dispatch } from 'react'
import { Icon } from 'semantic-ui-react'
import { WithTag } from '../../lib/styled-components-layout'

type Props = {
  img: any
  name: string
  to?: string
  as: string | ComponentType<string>
  onClick?: Dispatch<void>
  menu?: () => JSX.Element
}

export const MenuItem = ({ img, name, to, as, onClick }: Props) => (
  <WithTag as={as} to={to} onClick={onClick}>
    <Icon name={img} />
    {name}
  </WithTag>
)
