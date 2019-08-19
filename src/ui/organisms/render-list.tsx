import React from 'react'
import { ConditionalList } from './conditional-list'
import { RenderListItem } from 'ui'

// type JobsItem = {
//   _id: string
//   title: string
// }

type Props = {
  content: Array<any>
  renderEmpty?: () => React.ReactNode
  landing?: boolean
}

export const RenderList = ({ renderEmpty, content, landing }: Props) => {
  return (
    <>
      <ConditionalList
        list={content}
        renderEmpty={renderEmpty}
        renderExists={list => (
          <>
            {list.map((item: any) => (
              <RenderListItem item={item} key={item} />
              // <RenderListItem item={item} key={item._id} />
            ))}
          </>
        )}
        />
        {!landing && <h1>Pagination</h1>}
      </>
  )
}