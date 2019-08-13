import React from 'react'
import { RenderList, SubTitle } from 'ui'

export const JobsList = () => {
  return (
    <RenderList
      content={jonsList}
      renderEmpty={() => <SubTitle>Нету списка вакансий</SubTitle>}
    />
  )
}
const jonsList = [1, 2, 3, 4, 5, 6]
