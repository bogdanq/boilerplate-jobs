import React from 'react'
import { ConditionalList } from '../../../ui'

type JobsItem = {
  _id: string
  title: string
}

type Props = {
  jobsList: Array<JobsItem>
  renderEmpty?: () => React.ReactNode
}

export const JobsList = ({ renderEmpty, jobsList }: Props) => {
  return (
    <>
      <ConditionalList
        list={jobsList}
        renderEmpty={renderEmpty}
        renderExists={jobsList => (
          <>
            {jobsList.map((item: JobsItem) => (
              <JobsComponent item={item} key={item._id} />
            ))}
          </>
        )}
      />
    </>
  )
}

type JobsProps = {
  item: JobsItem
}

const JobsComponent = ({ item }: JobsProps) => {
  console.log(item)
  // сделать вычисления, приконектить, вернуть итем
  return <h1>JobsComponent item</h1>
}
