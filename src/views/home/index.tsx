import React from 'react'
import { Header, HomeHeaderContent } from 'features/header'
import { JobsList } from 'features/jobs'
import { SummaryList } from 'features/summary'
import { DefaultTemplate, Tabs, TabButton } from 'ui'

export const Home = () => {
  return (
    <DefaultTemplate
      header={<Header />}
      hero={<HomeHeaderContent title='Seatching job' subTitle='in one click' />}
    >
      <Tabs
        buttons={[
          { title: 'Список вакансий', button: TabButton },
          { title: 'Список резюме', button: TabButton }
        ]}
        tabs={[ SummaryList, JobsList ]}
      />
    </DefaultTemplate>
  )
}
