import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import ListContext from '../context/list-context'

const AddItemForm = () => {
  const { dispatch } = useContext(ListContext)
  const [ validated, setValidated ] = useState(false)
  const [ item, setItem ] = useState('')

  const addItem = e => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.stopPropagation()
    } else {
      dispatch({ type: 'ADD_ITEM', item })
      setItem('')
    }

    setValidated(true)
  }

  return (

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
  )
}

export default AddItemForm
