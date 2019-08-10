import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import ListItem from './ListItem'
import Context from '../context/context'

const List = () => {
  const { list } = useContext(Context)

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
