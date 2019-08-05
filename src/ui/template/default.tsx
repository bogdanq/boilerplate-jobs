import React from 'react'
import { GenericTemplate } from '../../features/common/organisms/generic-template'

type Props = {
  children: React.ReactNode
}

export const DefaultTemplate = ({ children }: Props) => (
  <GenericTemplate content={children} />
)
