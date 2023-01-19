/* eslint-disable*/
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Content } from './components/content'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

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
