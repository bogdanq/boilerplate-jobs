import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import header_logo from 'assets/jobs.jpg'
import { Title, SubTitle } from 'ui/atoms'

type Props = {
  title: string
  subTitle: string
}

export const HomeHeaderContent = ({ title, subTitle }: Props) => {
  return (
    <CaruselWrapper>
      <AliceCarousel
        autoPlay={true}
        buttonsDisabled={true}
        autoPlayInterval={3000}
        mouseDragEnabled
      >
        <CarouselItemBox>
          <Background>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Background>
        </CarouselItemBox>
        <CarouselItemBox>
          <Background>
            <Title>{title} 2</Title>
            <SubTitle>{subTitle} 2</SubTitle>
          </Background>
        </CarouselItemBox>
      </AliceCarousel>
    </CaruselWrapper>
  )
}

const CarouselItemBox = styled.div`
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
const CaruselWrapper = styled.div`
  & ul {
    margin: -45px 0 5px;
    position: relative;
  }
`
