import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import ListApp from './components/ListApp'
import LoginPage from './components/LoginPage'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  const jsx = user ?
    <ListApp uid={ { uid: user.uid } } /> :
    <LoginPage />

  render(jsx, document.getElementById('app'))
})
