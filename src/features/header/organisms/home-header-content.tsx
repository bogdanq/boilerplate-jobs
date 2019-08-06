import React from 'react'
import styled from 'styled-components'
import header_logo from '../../../assets/jobs.jpg'
import { Title, SubTitle } from '../../../ui/atoms'

type Props = {
  title: string
  subTitle: string
}

export const HomeHeaderContent = ({ title, subTitle }: Props) => {
  return (
    <BackWrapper>
      <Background>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Background>
    </BackWrapper>
  )
}

const BackWrapper = styled.div`
  background-image: url(${header_logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const Background = styled.div`
  background-color: #0000007e;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
