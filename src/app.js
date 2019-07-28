import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import App from './components/App'
import SignIn from './components/SignIn'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  if (user) {

    const uid = user.uid
    
    render(<App uid={ uid } />, document.getElementById('app'))
  
  } else {

    render(<SignIn />, document.getElementById('app'))
  }
})
