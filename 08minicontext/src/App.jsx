import { useState } from 'react'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <Usercontextprovider>
        <h1 className='text-xl text-center'>minicontext</h1>
        <Login/>
        <Profile/>
    </Usercontextprovider>
  
  )
}

export default App
