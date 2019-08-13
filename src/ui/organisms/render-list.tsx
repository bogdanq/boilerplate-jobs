import React from 'react'
import styled from 'styled-components'
import { ConditionalList } from './conditional-list'
import { RenderListItem } from 'ui'

// type JobsItem = {
//   _id: string
//   title: string
// }

type Props = {
  content: Array<any>
  renderEmpty?: () => React.ReactNode
}

export const RenderList = ({ renderEmpty, content }: Props) => {
  return (
    <ConditionalListBox>
      <ConditionalList
        list={content}
        renderEmpty={renderEmpty}
        renderExists={list => (
          <>
            {list.map((item: any) => (
              <RenderListItem item={item} key={item._id} />
            ))}
          </>
        )}
      />
    </ConditionalListBox>
  )
}

const ConditionalListBox = styled.div`
  margin: 10px auto;
  margin-top: 20px;
  width: 1000px;
  border-radius: 20px;
  height: 650px;
  background: #fff;
  cursor: pointer;
`
