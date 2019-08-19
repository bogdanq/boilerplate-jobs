import React from 'react'
import { RenderList, SubTitle, CenterContentTemplate } from 'ui'

type Props = {
  viewAll?: React.ReactNode
  pagination?: boolean
}

export const JobsList = ({ viewAll, pagination }: Props) => {
  return (
    <>
      <CenterContentTemplate>
        <RenderList
          content={jonsList}
          renderEmpty={() => <SubTitle>Нету списка вакансий</SubTitle>}
          pagination={pagination}
        />
      </CenterContentTemplate>
      {viewAll}
    </>
  )
}
const jonsList = [1, 2, 3, 4, 5, 6]
