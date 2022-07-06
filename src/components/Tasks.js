import React from 'react'
import Task from './Task'

const Tasks = ({tasks,del,done, edit,isEditing}) => {
  return (
    <> 
     {tasks.length > 0 ? 
            <div>{tasks.map((task , index) => <Task key={index} task={task} del={del} done={done} edit={edit} isEditing={isEditing}/>)}</div>
            :
            (<div className='text-center'>
                <p>Enter Your first task</p>
              </div>
            )
            }
    </>
  )
}

export default Tasks