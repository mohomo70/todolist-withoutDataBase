import './App.css';
import { useEffect } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import AddingModal from './components/AddingModal'

function App() {

  const getItems = JSON.parse(localStorage.getItem('initTasks'))
   
  const [show, setShow] = useState(false)
  const [tasks, setTasks] = useState(getItems)

  useEffect(() => {

    localStorage.setItem("initTasks", JSON.stringify(tasks))

  }, [tasks])


  const onDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const onAdd = (name) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...name }
    setTasks([...tasks, newTask])
  }

  const ToggleDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task))
  }

  const toggleEditing = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task))

  }

  const edit = (id, edited) => {
    
    setTasks(tasks.map(task => task.id === id ? { ...task, name: edited.name, isEditing: !task.isEditing } : task))
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <Container>
        <Header />
        <main>
          <div className='text-center'>
            <Button variant="secondary" size="lg" onClick={handleShow}>ADD A NEW TASK</Button>
          </div>
          <Tasks tasks={tasks} del={onDelete} done={ToggleDone} edit={edit} isEditing={toggleEditing} />
          <AddingModal show={show} handleClose={handleClose} handleShow={handleShow} add={onAdd} />
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
