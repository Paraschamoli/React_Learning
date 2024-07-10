import { createContext,useContext } from "react";

export const Todocontext=createContext({
    todoArr:[{
        id:1,
        todo:"pimp",
        completed:false
    }],

    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo=()=>{
    return useContext(Todocontext)
}

export const Todoprovider= Todocontext.Provider