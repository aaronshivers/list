import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import App from './components/App'
import './styles/styles.scss'
// import SignIn from './SignIn'

render(<App />, document.getElementById('app'))

const toggleSignIn = () => {

  if (firebase.auth().currentUser) {

    firebase.auth().signout()

  } else {
    
    try {

      firebase.auth().signInAnonymously()

    } catch (error) {

      console.error(error)

    }
  }
}
