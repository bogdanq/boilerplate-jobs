import React from 'react'
import { GenericTemplate } from '../../features/common/organisms/generic-template'

type Props = {
  children: React.ReactNode
  header: React.ReactNode
}

export const DefaultTemplate = ({ children, header }: Props) => (
  <GenericTemplate header={header} content={children} />
)
