import React from 'react'
import { Button } from 'react-bootstrap'
import { firebase } from '../db/firebase'

const Logout = ({ uid }) => {

  const handleLogout = () => {
    console.log('logout clicked')
    console.log('uid', uid)
    firebase.auth().signOut()
  }

  return (
    <Button variant="warning" size="lg" onClick={ handleLogout }>Logout</Button>
  )
}

export default Logout
