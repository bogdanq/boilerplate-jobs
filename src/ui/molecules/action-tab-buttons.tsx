import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Row, Container } from '../../ui'

type Props = {
  index: number
  fields: Array<string>
  setIndex: (id: number) => void
}

export const ActionTabButtons = ({ index, setIndex, fields }: Props) => {
  return (
    <TabContainerBox>
      <Row>
        <Container justify='center'>
          {fields.map((item: string, id: number) => (
            <TabButton
              key={id}
              active={index === id}
              onClick={() => setIndex(id)}
            >
              {item}
            </TabButton>
          ))}
        </Container>
      </Row>
    </TabContainerBox>
  )
}

const TabContainerBox = styled.div`
  margin-top: 80px;
  text-align: center;
`

type StyledProps = {
  active: boolean
}

const TabButton: StyledComponent<any, StyledProps> = styled.div`
  cursor: pointer;
  padding: 0 20px;
  font-size: 20px;
  color: #00bff3;
  padding-bottom: 15px;
  margin: 0 10px;
  border-bottom: ${({ active }: any) =>
    active ? '2px solid #00bff3' : '2px solid transparent'};
`
