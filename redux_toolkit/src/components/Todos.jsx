import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'
function Todos() {
  const todos=useSelector(state=>state.todos)  
  const dispatch=useDispatch()

  return (
    <>
    <div>Todos</div></>
  )
}

export default Todos