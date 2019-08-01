import React from 'react'
import styled, { css } from 'styled-components'

export const WithTag = ({ as: HtmlTagName = 'div', children, ...props }) => (
  <HtmlTagName {...props}>{children}</HtmlTagName>
)

const is = value => typeof value !== 'undefined'
const prop = value => (is(value) ? value : 'initial')

export const mixins = props => css`
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
