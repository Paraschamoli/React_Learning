import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
   let myobj={
       username:"rajat",
       prof:"pimp"
   }
   let myarr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400'>tailwind</h1>
{/* <Card channel="my channel" obj={myobj} arr={myarr} /> */}
<Card username="rajat"/>

    </>
  )
}

export default App
