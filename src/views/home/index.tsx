import React from 'react'
import { Header } from '../../features/header'
import { HomeHeaderContent } from '../../features/header/organisms'
import { JobsList } from '../../features/jobs'
import { DefaultTemplate, SubTitle } from '../../ui'

export const Home = () => {
  return (
    <DefaultTemplate
      header={<Header />}
      hero={<HomeHeaderContent title='Seatching job' subTitle='in one click' />}
    >
      <h1>home</h1>
      <JobsList
        jobsList={List} // возможно коннект сделать в самой фиче
        renderEmpty={() => <SubTitle>Нету списка работы</SubTitle>}
      />
    </DefaultTemplate>
  )
}

const List = [{ _id: 'qwdwqdqwd', title: 'title' }]
