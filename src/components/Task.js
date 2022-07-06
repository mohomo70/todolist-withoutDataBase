import React, { useState } from 'react'
import { ListGroup, Button,Form, Col, Row } from 'react-bootstrap'

const Task = ({task,del,done,edit,isEditing}) => {
    const [name,setName] = useState("")

    const editmethod = (e) =>{
        e.preventDefault()
        edit(task.id,{name})
        setName("")
    }

  return (
    <ListGroup   className='my-3'>
        <ListGroup.Item  className={task.isDone?'done': ''} >
            <Row>
            <Col>{task.name}</Col>
            <Col>
            <Button className="mx-2" onClick={()=>done(task.id)} disabled={task.isDone}>Done</Button>
            <Button className="mx-2" onClick={() => del(task.id)} > DELETE </Button>
            <Button onClick={()=>isEditing(task.id)} disabled={task.isDone}>edit</Button>
            </Col>
           </Row>
        {task.isEditing?
                (<Form className="my-2" onSubmit={editmethod}>
                    <Form.Group>
                        <Form.Control type="input" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                        <Button type="submit">submit</Button>
                    </Form.Group>
                </Form>)
                :
                (<></>)
            }   
        </ListGroup.Item>
    </ListGroup >
  )
}

export default Task