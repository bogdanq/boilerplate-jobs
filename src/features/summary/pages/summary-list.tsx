import React from 'react'
import { RenderList, SubTitle, CenterContentTemplate } from 'ui'

type Props = {
  viewAll?: React.ReactNode
  pagination?: boolean
}

export const SummaryList = ({ viewAll, pagination }: Props) => {
  return (
    <>
      <CenterContentTemplate>
        <RenderList
          content={summaryList}
          renderEmpty={() => <SubTitle>Нету списка резюме</SubTitle>}
          pagination={pagination}
        />
      </CenterContentTemplate>
      {viewAll}
    </>
  )
}
const summaryList = [1, 2, 3, 4, 5, 6]
