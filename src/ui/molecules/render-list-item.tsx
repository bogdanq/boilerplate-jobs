import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'semantic-ui-react'
import { Container } from '../template'
import { Row } from '../atoms'

export const RenderListItem = ({ item }: any) => {
  return (
    <ItemsBox>
      <Row>
        <Container justify='space-between' align='center'>
          <LikeSection>
            <Button icon color='red'>
              <Icon name='heart' />
            </Button>
          </LikeSection>
          <ProfileSection>
            <Icon circular name='users' color='teal' size='big' />
          </ProfileSection>
          <InfoSection>
            <h3>Peoject Manager</h3>
            <p>Company Inc</p>
          </InfoSection>
          <TimeSection>full time</TimeSection>
          <PaySection>$45,000</PaySection>
        </Container>
      </Row>
    </ItemsBox>
  )
}

const ItemsBox = styled.div`
  padding: 15px 25px;
  &:hover {
    box-shadow: -2px 0px 7px 6px rgba(0, 0, 0, 0.07);
    background: #fff;
  }
`
const LikeSection = styled.div``

const ProfileSection = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`
const InfoSection = styled.div`
  text-align: left;
  width: 40%;
  & h3 {
    font-size: 20px;
    margin-bottom: 0;
  }
  & p {
    font-size: 15px;
  }
`
const TimeSection = styled.div`
  font-size: 15px;
  padding: 10px 0;
  color: #fff;
  background: #00bff3;
  width: 125px;
  border-top-left-radius: 90px;
  border-bottom-right-radius: 51px;
  border-bottom-left-radius: 15px;
`
const PaySection = styled.div`
  color: #00bff3;
  font-weight: bold;
  font-size: 20px;
  width: 20%;
`
