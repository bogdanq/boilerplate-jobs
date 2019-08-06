import React from 'react'
import { Header } from '../../features/header'
import { HomeHeaderContent } from '../../features/header/organisms'
import { DefaultTemplate } from '../../ui'

export const Home = () => {
  return (
    <DefaultTemplate
      header={
        <Header
          content={
            <HomeHeaderContent title='Seatching job' subTitle='in one click' />
          }
        />
      }
    >
      <h1>home</h1>
    </DefaultTemplate>
  )
}
