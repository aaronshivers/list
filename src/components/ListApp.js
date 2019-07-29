import React, { useEffect, useReducer } from 'react'
import { Container, Button} from 'react-bootstrap'
// import firebase from '../db/firebase'
import ListContext from '../context/list-context'
import listReducer from '../reducers/list'
import AddItemForm from './AddItemForm'
import List from './List'
// import LoginButton from './LoginButton'

const ListApp = () => {
  const [ list, dispatch ] = useReducer(listReducer, [])

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'))
    if (list) {
      dispatch({ type: 'POPULATE_LIST', list })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <ListContext.Provider value={ {  list, dispatch  } }>
      <Container className="mt-3 mb-3">

        {/*<LoginButton uid={ uid } />*/}

        <h1 className="display-4 text-center">List</h1>

        <AddItemForm/>

        <hr className="border" />

        <List/>

      </Container>
    </ListContext.Provider>
  )
}

export default ListApp
