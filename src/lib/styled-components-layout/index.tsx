import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

type TagsProps = {
  as?: any
  to?: string
  children: ReactNode
  onClick?: any
}

export const WithTag = ({
  as: HtmlTagName,
  children,
  to,
  onClick,
  ...props
}: TagsProps) => (
  <HtmlTagName to={to} onClick={onClick} {...props}>
    {children}
  </HtmlTagName>
)

WithTag.defaultProps = {
  as: 'div',
}

const is = (value?: string) => typeof value !== 'undefined'
const prop = (value?: string) => (is(value) ? value : 'initial')

export const mixins = (props: MixinsProps) => css`
  align-content: ${prop(props.alignContent)};
  align-items: ${prop(props.align)};
  flex-basis: ${prop(props.basis)};
  flex-grow: ${prop(props.grow)};
  flex-shrink: ${prop(props.shrink)};
  justify-content: ${prop(props.justify)};
  order: ${prop(props.order)};
  padding: ${prop(props.padding)};
  width: ${prop(props.width)};
  margin: ${prop(props.margin)};
`

export const Row = styled(WithTag)`
  display: flex;
  flex-direction: row;
  ${mixins}
`

export const Col = styled(WithTag)`
  display: flex;
  flex-direction: column;
  ${mixins}
`
type MixinsProps = {
  alignContent?: string
  align?: string
  basis?: string
  grow?: string
  shrink?: string
  justify?: string
  order?: string
  padding?: string
  width?: string
  margin?: string
}
