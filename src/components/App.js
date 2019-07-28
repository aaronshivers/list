import React, { useState, useEffect } from 'react'
import { Container, Form, Button, ListGroup } from 'react-bootstrap'
import db from '../db/db'

const App = () => {
  const [ validated, setValidated ] = useState(false)
  const [ todo, setTodo ] = useState('')
  const [ list, setList ] = useState([])

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.stopPropagation()
    } else {
      setList(list => setList([ todo, ...list ]))
    }

    setValidated(true)
  }

  useEffect(() => {
    console.log('run once')
  }, [])


  useEffect(() => {
    console.log('list', list)
  }, [list])

  return (
    <Container>
      <h1 className="display-4 text-center">todo-react</h1>

      <Form noValidate validated={ validated } onSubmit={ handleOnSubmit }>

        {/* Todo */}
        <Form.Group controlId="todo">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Todo..."
            value={ todo }
            onChange={ e => setTodo(e.target.value) }
            required
          />
        </Form.Group>

        {/* Button */}
        <Button
          size="lg"
          variant="primary"
          type="submit"
        >
          Add Todo
        </Button>

      </Form>

      <hr />

      <ListGroup>
        {
          list && list.map((item, i) => (
            <ListGroup.Item key={ i }>{ item }</ListGroup.Item>
          ))
        }
      </ListGroup>

    </Container>
  )
}

export default App
