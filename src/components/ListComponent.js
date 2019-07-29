import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Item from './Item'

const ListComponent = ({ list, removeItem }) => (
  <ListGroup>
    {
      list && list.map((curItem, i) => (
        <Item key={ i } curItem={ curItem } removeItem={ removeItem } />
      ))
    }
  </ListGroup>
)

export default ListComponent
