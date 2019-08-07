import React from 'react'
import { GenericTemplate } from '../../features/common/organisms/generic-template'

type Props = {
  children: React.ReactNode
  header: React.ReactNode
  hero?: React.ReactNode
}

export const DefaultTemplate = ({ children, header, hero }: Props) => (
  <GenericTemplate hero={hero} header={header} content={children} />
)
