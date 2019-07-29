import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import App from './components/App'
import SignIn from './components/SignIn'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  const component = user ? <App uid={ user.uid } /> : <SignIn />

  render(component, document.getElementById('app'))

})
