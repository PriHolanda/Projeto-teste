/* eslint-disable*/
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Content } from './content'
import { Footer } from './footer'
import { Header } from './header'
import { Sidebar } from './sidebar'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Box>
  )
}

export { Content }

