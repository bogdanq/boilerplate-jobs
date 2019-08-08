import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Header } from '../../features/header'
import { HomeHeaderContent } from '../../features/header/organisms'
import {
  DefaultTemplate,
  SubTitle,
  RenderList,
  ActionTabButtons,
} from '../../ui'

export const Home = () => {
  const [index, setIndex] = React.useState(0)

  return (
    <DefaultTemplate
      header={<Header />}
      hero={<HomeHeaderContent title='Seatching job' subTitle='in one click' />}
    >
      <ActionTabButtons
        index={index}
        setIndex={setIndex}
        fields={['Список вакансий', 'Список резюме']}
      />
      <SwipeableViews index={index}>
        <RenderList
          content={jobsList}
          renderEmpty={() => <SubTitle>Нету списка вакансий</SubTitle>}
        />
        <RenderList
          content={summaryList}
          renderEmpty={() => <SubTitle>Нету списка резюме</SubTitle>}
        />
      </SwipeableViews>
    </DefaultTemplate>
  )
}

const jobsList = [1, 2, 3, 4, 5, 6]
const summaryList = [1, 2, 3, 4, 5, 6]
