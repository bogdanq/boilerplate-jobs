import React from 'react'
import { SmallHeaderContent } from 'features/header/organisms'
import { MainTemplate } from 'ui'
import { JobsList } from 'features/jobs'

export const Jobs = () => {
  return (
    <MainTemplate hero={<SmallHeaderContent />}>
      <h1>Jobs</h1>
      <JobsList pagination={true} />
    </MainTemplate>
  )
}
