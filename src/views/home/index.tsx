import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import about from 'assets/about.png'
import plans from 'assets/plans.png'
import company from 'assets/company.png'
import { JobsList } from 'features/jobs'
import { SummaryList } from 'features/summary'
import {
  MainTemplate,
  Tabs,
  TabButton,
  HomeHero,
  Title,
  Text,
  Container,
} from 'ui'

export const Home = () => {
  return (
    <MainTemplate
      hero={<HomeHero title='Seatching job' subTitle='in one click' />}
    >
      <Tabs
        buttons={[
          { title: 'Список вакансий', button: TabButton },
          { title: 'Список резюме', button: TabButton },
        ]}
        tabs={[
          () => (
            <SummaryList
              viewAll={
                <NavLink to='/jobs'>
                  <CustomButton>Смотреть еще</CustomButton>
                </NavLink>
              }
            />
          ),
          () => (
            <JobsList
              viewAll={
                <NavLink to='/summary'>
                  <CustomButton>Смотреть еще</CustomButton>
                </NavLink>
              }
            />
          ),
        ]}
      />
      <TextWrapper>
        <Container width='1000px'>
          <Title size='55px' color='#000000'>
            Meshjobs Site Stats
          </Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam
            vitae libero molestias, expedita recusandae exercitationem optio
            nisi incidunt, dolores qui minima eveniet cupiditate quibusdam
            placeat, perspiciatis at assumenda excepturi?
          </Text>
          <Image src={about} />
        </Container>
      </TextWrapper>
      <TextWrapper>
        <Container width='1100px'>
          <Title size='55px' color='#000000'>
            Plans
          </Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam
            vitae libero molestias, expedita recusandae
          </Text>
          <Image src={plans} />
        </Container>
      </TextWrapper>
      <TextWrapper>
        <Container width='1000px'>
          <Title size='55px' color='#000000'>
            Featured Company
          </Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quam
            vitae libero molestias, expedita recusandae exercitationem optio
            nisi incidunt, dolores qui minima eveniet cupiditate quibusdam
            placeat, perspiciatis at assumenda excepturi?
          </Text>
          <Image src={company} />
        </Container>
      </TextWrapper>
    </MainTemplate>
  )
}

const TextWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 40px;
  background: ${({ background }: { background?: string }) => background};
`
const CustomButton = styled.div`
  max-width: 360px;
  width: 100%;
  height: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  padding-top: 15px;
  text-align: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #8ec63f;
  margin: 0 auto;
  cursor: pointer;
  background: ${({ background }: { background?: string }) => background};
  margin-bottom: 30px;
`
