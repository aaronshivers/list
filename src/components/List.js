import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import ListItem from './ListItem'
import ListContext from '../context/list-context'

const List = () => {
  const { list } = useContext(ListContext)

  return (
    <ListGroup>
      {
        list && list.map((itemObject, i) => (
          <ListItem key={ i } itemObject={ itemObject } />
        ))
      }
    </ListGroup>
  )
}

export default List
