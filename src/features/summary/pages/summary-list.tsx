import React from 'react'
import { RenderList, SubTitle } from 'ui'

export const SummaryList = () => {
  return (
    <RenderList
      content={summaryList}
      renderEmpty={() => <SubTitle>Нету списка резюме</SubTitle>}
    />
  )
}
const summaryList = [1, 2, 3, 4, 5, 6]
