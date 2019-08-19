import React from 'react'
import { JobsList } from 'features/jobs'
import { SummaryList } from 'features/summary'
import { MainTemplate, Tabs, TabButton, HomeHero } from 'ui'

export const Home = () => {
  return (
    <MainTemplate
      hero={<HomeHero title='Seatching job' subTitle='in one click' />}
    >
      <Tabs
        buttons={[
          { title: 'Список вакансий', button: TabButton },
          { title: 'Список резюме', button: TabButton }
        ]}
        tabs={[
          () => <SummaryList viewAll={<button>viewAll</button>}/>, 
          () => <JobsList viewAll={<button>viewAll</button>}/>,
        ]}
      />
    </MainTemplate>
  )
}
