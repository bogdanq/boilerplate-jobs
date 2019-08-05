import React from 'react'
import { Icon } from 'semantic-ui-react'
import { WithTag } from '../../lib/styled-components-layout'
import { Fields } from '../../lib/drop-menu'
import { Container, Row } from '../'

type Props = {
  img: any
  name: string
  to?: string
  as: Fields | React.ComponentType<any>
  onClick?: React.Dispatch<void>
}

export const MenuItem = ({ img, name, to, as, onClick }: Props) => (
  <WithTag as={as} to={to} onClick={onClick}>
    <Icon name={img} />
    {name}
  </WithTag>
)

export const DropMenuItem = ({ img, name, to, as, onClick }: Props) => (
  <Row>
    <Container>
      <MenuItem img={img} name={name} to={to} as={as} onClick={onClick} />
    </Container>
  </Row>
)
