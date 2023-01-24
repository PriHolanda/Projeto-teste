import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import iphone from '../../assets/images/login.png'
import logo from '../../assets/images/logo.png'

function Login() {
  return (
    <Center bg='#030303'>
      <Flex>

        {/* FORMULARIO */}
        <Box>
          <Image src={logo} h='80px' />
          <Heading size='2xl' color='white' fontFamily='Poppins' >Sign in</Heading>

          <Flex gap='4px'>
            <Text fontSize='md' fontFamily='Poppins' color='rgba(255, 255, 255, 0.5) '>Don't have an account? </Text>
            <Text fontSize='md' fontFamily='Poppins' color='rgba(28, 208, 50, 0.5)' > Sign-up now</Text>
          </Flex>

          {/* EMAIL OU USUARIO */}
          <Text size='md' fontFamily='Poppins' color='rgba(28, 208, 50, 0.3)' >Email or User</Text>
          <Input
            placeholder='Email or User'
            size='lg'
            _placeholder={{ color: 'rgba(28, 208, 50, 0.1)' }}
            focusBorderColor='#1CD032'
            isInvalid
            errorBorderColor='rgba(28, 208, 50, 0.5)'>
          </Input>

          {/* SENHA */}
          <Text size='md' fontFamily='Poppins' color='rgba(28, 208, 50, 0.3)' >Password</Text>
          <Input
            placeholder='Password'
            size='lg'
            _placeholder={{ color: 'rgba(28, 208, 50, 0.1)' }}
            focusBorderColor='#1CD032'
            isInvalid
            errorBorderColor='rgba(28, 208, 50, 0.5)'>
          </Input>
          <Text color='rgba(214, 255, 219, 0.5)'>Forgot password?</Text>

          {/* BOTAO LOGIN */}
          <Flex flexDirection='column' alignItems='center' >
            <Button w='300px' bg='rgba(28, 208, 50, 1)' color='black' size='lg'>Login</Button>
            <Checkbox defaultChecked>Remember me</Checkbox>
          </Flex>

        </Box>

        <Image src={iphone} boxSize='755px' />

      </Flex>
    </Center>
  )

}

export default Login
