import styled from 'styled-components'

type Props = {
  color?: string
  size?: string
}

export const Title = styled.h1<Props>`
  font-size: 85px;
  color: #fff;
  text-align: center;
  margin: 0;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
`
