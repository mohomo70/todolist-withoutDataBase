import React,{useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import Add from './Add'

const AddingModal = ({show, handleClose,add}) => {
    const [name,setName] = useState('')
    const onSubmit = e =>{
        e.preventDefault()
        add({name})
        setName('')
      }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADDING NEW TASKS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
            <Form.Label htmlFor='input'>new Task: </Form.Label>
            <Form.Control id='input' type="input" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Form onSubmit={onSubmit}>
            <Button variant="primary" type="submit" onClick={handleClose}>
                Save Tasks
            </Button>
          </Form>
        </Modal.Footer>
    </Modal>
  )
}

export default AddingModal