import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const Item = ({ curItem, removeItem }) => (
  <ListGroup.Item>
    <span className="item-text text-break">{ curItem.item }</span>
    <Button variant="danger" className="float-right" onClick={ () => removeItem(curItem.item) }>X</Button>
  </ListGroup.Item>
)

export default Item