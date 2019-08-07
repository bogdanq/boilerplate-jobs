import styled, { css } from 'styled-components'

export const ShadowBox = styled.div`
  box-shadow: 2px 10px 21px -12px rgba(0, 0, 0, 2);
  ${({ direction }: any) =>
    direction &&
    css`
      &:after {
        content: '';
        position: absolute;
        ${direction}: 12px;
        top: 0;
        width: 2px;
        height: 100px;
        background: red;
      }
    `}
`
