import styled from 'styled-components'

export const Text = styled.h1`
  font-size: 15px;
  color: #727272;
  text-align: center;
  margin: 0 auto;
  line-height: 30px;
  color: ${({ color }) => color};
`
