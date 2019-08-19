import React from 'react'
import { GenericTemplate } from 'features/common/organisms/generic-template'

type Props = {
  children: React.ReactNode
  hero?: React.ReactNode
}

export const MainTemplate = ({ children, hero }: Props) => (
  <GenericTemplate hero={hero} children={children} />
)
