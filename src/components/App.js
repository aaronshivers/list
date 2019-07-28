import React, { useState, useEffect } from 'react'
import { Container, Form, Button, ListGroup } from 'react-bootstrap'
// import firebase from '../db/firebase'
// import database from '../db/firebase'
// import LoginButton from './LoginButton'

const App = ({ uid }) => {
  const [ validated, setValidated ] = useState(false)
  const [ list, setList ] = useState([])
  const [ item, setItem ] = useState('')

  const addItem = e => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.stopPropagation()
    } else {
      setList([ { item }, ...list ])
      setItem('')
    }

    setValidated(true)
  }

  const removeItem = itemToDelete => {
    setList(list.filter(curItem => curItem.item !== itemToDelete))
  }

  useEffect(() => {
    const listData = JSON.parse(localStorage.getItem('list'))
    if (listData) setList(listData)
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <Container>

      {/*<LoginButton uid={ uid } />*/}

      <h1 className="display-4 text-center">List</h1>

      <Form noValidate validated={ validated } onSubmit={ addItem }>

        {/* Item */}
        <Form.Group controlId="item">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Item..."
            value={ item }
            onChange={ e => setItem(e.target.value) }
            required
          />
        </Form.Group>

        {/* Button */}
        <Button
          size="lg"
          variant="primary"
          type="submit"
        >
          Add Item
        </Button>

      </Form>

      <hr className="border" />

      <ListGroup>
        {
          list && list.map((curItem, i) => (
            <Item key={ i } curItem={ curItem } removeItem={ removeItem } />
          ))
        }
      </ListGroup>

    </Container>
  )
}

const Item = ({ curItem, removeItem }) => {
  useEffect(() => {
    console.log('Setting up effect')

    return () => console.log('cleaning up effect')
  }, [])

  return (
    <ListGroup.Item>
      <span>{ curItem.item }</span>
      <Button variant="danger" className="float-right" onClick={ () => removeItem(curItem.item) }>X</Button>
    </ListGroup.Item>
  )
}

export default App
