import React from 'react'
import { RenderList, SubTitle, CenterContentTemplate } from 'ui'

type Props = {
  viewAll?: React.ReactNode
}

export const SummaryList = ({ viewAll }: Props) => {
  return (
    <>
      <CenterContentTemplate>
        <RenderList
          content={summaryList}
          renderEmpty={() => <SubTitle>Нету списка резюме</SubTitle>}
          landing={true}
        />
      </CenterContentTemplate>
      {viewAll}
    </>
  )
}
const summaryList = [1, 2, 3, 4, 5, 6]
