import React from 'react'
import { Container } from 'react-bootstrap'
import LoginButton from './LoginButton'

const SignIn = () => (
  <Container>
    <h1 className="text-center display-4">Todo App</h1>
    <h2 className="text-center">Sign In, Please</h2>
    <LoginButton />
  </Container>
)

export default SignIn
