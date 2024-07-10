import React, { useState } from 'react'

import {useDispatch} from ('react-redux')
import { addTodo } from '../features/todo/TodoSlice'


function AddTodo() {
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <>
    </>
  )
}

export default AddTodo