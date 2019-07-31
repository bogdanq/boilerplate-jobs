import styled, { css } from 'styled-components'
import { mixins, WithTag } from '../../lib/styled-components-layout'

export const Container = styled(WithTag)`
  ${mixins}

  max-width: 1500px;
  width: 100%;
  display: inherit;
  flex: inherit;
  flex-flow: inherit;
  flex-direction: inherit;
  margin: 0 auto;
`
