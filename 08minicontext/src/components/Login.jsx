import React,{useState,useContext} from 'react'
import Usercontext from '../context/UserContext'

function Login() {
    const[username,setusrname]=useState('')
    const[password,setpassword]=useState('')

    const {setuser}=useContext(Usercontext)
    const handlesub=(e)=>{
        e.preventDefault();
        setuser({username,password})

    }
  return (
    <div>
        <h2>login</h2>
        <input type="text"
        placeholder='username' 
        value={username}
        onChange={(e)=>setusrname(e.target.value)}/>
        <input type="text" placeholder='password'
         value={password}
         onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handlesub}>Submit</button>
    </div>
  )
}

export default Login