import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import ListApp from './components/ListApp'
import SignIn from './components/SignIn'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  const component = user ? <ListApp uid={ user.uid } /> : <SignIn />

  render(component, document.getElementById('app'))

})
