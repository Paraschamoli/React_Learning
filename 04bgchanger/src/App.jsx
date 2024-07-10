import { useState } from 'react'
import './App.css'
function App() {
  const[color,setcolour]=useState("blue")
  return (
    <>
    
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap
        justify-center gap-3 shadom-lg bg-white px-3 py-2 rounded-3xl'
          >
            <button onClick={()=> setcolour("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}}
             >red</button>
            <button className='outline-none px-4'
            style={{backgroundColor:"pink"}} onClick={()=> setcolour("pink")}>pink</button>
            <button className='outline-none px-4'
            style={{backgroundColor:"orange"}} onClick={()=> setcolour("orange")}>orange</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
