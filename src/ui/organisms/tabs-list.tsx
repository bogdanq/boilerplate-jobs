import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { TabButtonsWrapper } from 'ui'

type MapProps = {
  title: string,
  button: React.ComponentType<any>
}

type Props = {
  buttons: Array<MapProps>
  tabs: Array<React.ComponentType>
}

export const Tabs = ({ tabs, buttons }: Props) => {
  const [index, setIndex] = React.useState(0)

  return (
    <>
      <TabButtonsWrapper>
        {buttons.map(({title, button: Button}, id) => (
          <Button
            key={id}
            active={index === id}
            onClick={() => setIndex(id)}
          >
            {title}
          </Button>
        ))}
      </TabButtonsWrapper>
      <SwipeableViews index={index}>
        {tabs.map((TabContent, id) => (
          <TabContent key={id} />
        ))}
      </SwipeableViews>
    </>
  )
}
