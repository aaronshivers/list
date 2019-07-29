import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import UserContext from './context/user-context'
import ListApp from './components/ListApp'
import SignIn from './components/SignIn'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  render(
    <UserContext.Provider value={ { uid: user.uid } }>
      { user ? <ListApp /> : <SignIn /> }
    </UserContext.Provider>
    , document.getElementById('app'))
})
