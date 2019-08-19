import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const CenterContentTemplate = ({ children }: Props) => (
  <CenterContent>{children}</CenterContent>
)

export const CenterContent = styled.main`
  margin: 10px auto;
  margin-top: 20px;
  width: ${({ width }: { width?: string }) => width || '1100px'};
  border-radius: 20px;
  height: auto;
  background: #fff;
  margin-bottom: 0;
  cursor: pointer;
`
