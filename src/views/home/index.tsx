import React from 'react'
import { Header, HomeHeaderContent } from 'features/header'
import { JobsList } from 'features/jobs'
import { SummaryList } from 'features/summary'
import { DefaultTemplate, DefaultTabButtons, Tabs } from 'ui'

export const Home = () => {
  return (
    <DefaultTemplate
      header={<Header />}
      hero={<HomeHeaderContent title='Seatching job' subTitle='in one click' />}
    >
      <Tabs
        tab={DefaultTabButtons}
        tabs={[
          { title: 'Список вакансий', component: SummaryList },
          { title: 'Список резюме', component: JobsList },
        ]}
      />
    </DefaultTemplate>
  )
}
