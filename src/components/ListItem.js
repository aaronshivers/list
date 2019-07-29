import React, { useContext } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import ListContext from '../context/list-context'
import UserContext from '../context/user-context'
import database from '../db/firebase'

const ListItem = ({ itemObject: { item } }) => {
  const { dispatch } = useContext(ListContext)
  const { uid } = useContext(UserContext)

  const deleteItemFromFirebase = item => {
    return database
      .ref(`users/${ uid }/list/${ id }`)
      .remove()
  }

  const handleDeleteItem = () => {
    dispatch({ type: 'REMOVE_ITEM', item })
    deleteItemFromFirebase(item)
  }

  return (
    <ListGroup.Item>
      <span className="item-text text-break">{ item }</span>
      <Button
        variant="danger"
        className="float-right"
        onClick={ handleDeleteItem }
      >X</Button>
    </ListGroup.Item>
  )
}

export default ListItem