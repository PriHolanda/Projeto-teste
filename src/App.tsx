import { Button, Flex, HStack, useColorMode } from '@chakra-ui/react'
import { Home } from './pages/home'


function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex height={'100vh'} justify='center' align='center' >
      <HStack gap={'5'}>
        <Button onClick={toggleColorMode}>Current theme: {colorMode}</Button>
        <Home></Home>
      </HStack>
    </Flex >
  )
}

export default App
