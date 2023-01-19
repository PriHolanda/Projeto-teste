/* eslint-disable */
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../layout'
import { styles } from './styles'

export const Home: React.FC = () => {
  return (
    <Layout>
      <Box {...styles.container()}>Home</Box>
    </Layout>

  )
}
