import React, { useContext } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import ListContext from '../context/list-context'

const ListItem = ({ itemObject: { item } }) => {
  const { dispatch } = useContext(ListContext)

  return (
    <ListGroup.Item>
      <span className="item-text text-break">{ item }</span>
      <Button
        variant="danger"
        className="float-right"
        onClick={ () => dispatch({ type: 'REMOVE_ITEM', item }) }
      >X</Button>
    </ListGroup.Item>
  )
}

export default ListItem