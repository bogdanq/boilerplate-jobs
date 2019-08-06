import React from 'react'
import { Header } from '../../features/header'
import { SmallHeaderContent } from '../../features/header/organisms'
import { DefaultTemplate } from '../../ui'

export const Jobs = () => {
  return (
    <DefaultTemplate header={<Header content={<SmallHeaderContent />} />}>
      <h1>Jobs</h1>
    </DefaultTemplate>
  )
}
