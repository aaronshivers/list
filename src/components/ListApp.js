import React, { useEffect, useReducer } from 'react'
import { Container, Button} from 'react-bootstrap'
// import firebase from '../db/firebase'
// import database from '../db/firebase'
import listReducer from '../reducers/list'
import Item from './Item'
import AddItemForm from './AddItemForm'
import ListComponent from './ListComponent'
// import LoginButton from './LoginButton'

const ListApp = ({ uid }) => {
  const [ list, dispatch ] = useReducer(listReducer, [])

  const removeItem = item => {
    dispatch({ type: 'REMOVE_ITEM', item })
  }

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
    <Container>

      {/*<LoginButton uid={ uid } />*/}

      <h1 className="display-4 text-center">List</h1>

      <AddItemForm
        dispatch={ dispatch }
      />

      <hr className="border" />

      <ListComponent
        list={ list }
        removeItem={ removeItem }
      />

    </Container>
  )
}

export default ListApp
