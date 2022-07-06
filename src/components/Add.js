import React, { useState } from 'react'

const Add = ({add}) => {
  const [name,setName]= useState('')  
  const onSubmit = e =>{
    e.preventDefault()
    add({name})
  }
  return (
    <>
        <form onSubmit={onSubmit}>
            <label htmlFor='input'>new Task: </label>
            <input id='input' type="input" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
    </>
  )
}

export default Add