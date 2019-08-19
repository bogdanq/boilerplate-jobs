import React from 'react'
import { MainTemplate } from '../../ui'
import { SummaryList } from 'features/summary';

export const Summary = () => {
  return (
    <MainTemplate>
      <h1>Summary</h1>
      <SummaryList />
    </MainTemplate>
  )
}
