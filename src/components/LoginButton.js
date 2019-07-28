import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { firebase } from '../db/firebase'

const LoginButton = () => {
  const [ loggedIn, setLoggedIn ] = useState(false)

  const handleLogin = () => {
    console.log('signin clicked')

    if (firebase.auth().currentUser) {
      console.log('signed in')

      // Start signout
      firebase.auth().signOut()
      setLoggedIn(false)

    } else {
      
      try {

        console.log('trying to sign in')
        // Start signin
        firebase.auth().signInAnonymously()
        setLoggedIn(true)

      } catch (error) {

        console.error(error)

      }
    }
  }

  return (
    <Container>
      <Button size="lg" onClick={ handleLogin }>
        {
          loggedIn ? 'Log Out' : 'Log In'
        }
      </Button>
    </Container>
  )
}

export default LoginButton