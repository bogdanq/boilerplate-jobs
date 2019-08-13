import React from 'react'
import SwipeableViews from 'react-swipeable-views'

type MapProps = {
  component: React.ComponentType<any>
  title: string
}

type Props = {
  tab: React.ComponentType<any>
  tabs: Array<MapProps>
}

export const Tabs = ({ tabs, tab: Tab }: Props) => {
  const [index, setIndex] = React.useState(0)

  return (
    <>
      <Tab
        index={index}
        setIndex={setIndex}
        fields={tabs.map(({ title }) => title)}
      />
      <SwipeableViews index={index}>
        {tabs.map(({ component: Component }, id: number) => (
          <Component key={id} />
        ))}
      </SwipeableViews>
    </>
  )
}
