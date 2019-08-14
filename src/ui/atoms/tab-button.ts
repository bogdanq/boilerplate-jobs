import styled, { StyledComponent } from 'styled-components'

export const TabButton: StyledComponent<any, StyledProps> = styled.div`
  cursor: pointer;
  padding: 0 20px;
  font-size: 20px;
  color: #00bff3;
  padding-bottom: 15px;
  margin: 0 10px;
  border-bottom: ${({ active }: any) =>
    active ? '2px solid #00bff3' : '2px solid transparent'};
`

type StyledProps = {
    active: boolean
  }