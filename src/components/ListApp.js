import React, { useContext, useEffect, useReducer } from 'react'
import { Container, Button } from 'react-bootstrap'
// import firebase from '../db/firebase'
import Context from '../context/context'
import listReducer from '../reducers/list'
import TopBar from './TopBar'
import AddItemForm from './AddItemForm'
import List from './List'
// import LoginButton from './LoginButton'

const ListApp = ({ uid }) => {
  const [ state, dispatch ] = useReducer(listReducer, [])

  // useEffect(() => {
  //   const list = JSON.parse(localStorage.getItem('list'))
  //   if (list) {
  //     dispatch({ type: 'POPULATE_LIST', list })
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('list', JSON.stringify(list))
  // }, [state])

  // const addItem = item => {
  //   return database
  //     .ref(`users/${ uid }/list`)
  //     .push(item)
  //     .then(item => console.log(item))
  // }

  return (
    <Context.Provider value={ { uid, state, dispatch } }>
      <TopBar />
      <Container className="mt-3 mb-3">

        {/*<LoginButton uid={ uid } />*/}

        <h1 className="display-4 text-center">List</h1>

        <AddItemForm onSubmit={ () => console.log('hiasdfjlkjasdf') } />

        <hr className="border" />

        <List/>

      </Container>
    </Context.Provider>
  )
}

export default ListApp
