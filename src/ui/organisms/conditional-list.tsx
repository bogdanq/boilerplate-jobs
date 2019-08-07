import React from 'react'

type Props = {
  list: Array<{}>
  renderExists: (arr: Array<{}>) => React.ReactNode
  renderEmpty?: () => React.ReactNode | null
}

export const ConditionalList = ({
  list,
  renderExists,
  renderEmpty = () => null,
}: Props) => <>{list && list.length > 0 ? renderExists(list) : renderEmpty()}</>
