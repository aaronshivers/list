import React, { useContext } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Context from '../context/context'
import database from '../db/firebase'

const ListItem = ({ itemObject: { item } }) => {
  const { uid, dispatch } = useContext(Context)

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