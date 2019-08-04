import React, { ReactNode } from 'react'
import { GenericTemplate } from '../../features/common/organisms/generic-template'

type Props = {
  children: ReactNode
}

export const DefaultTemplate = ({ children }: Props) => (
  <GenericTemplate content={children} />
)
