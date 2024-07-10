import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const[themeMode,setTheme]=useState("light")
  
  const  darkTheme=()=>{
    setTheme("dark")
  }
  const lighTheme=()=>{
    setTheme("light")
  }
  // actual change in theme

  useEffect(()=>{
    let x=document.querySelector('html').classList
    x.remove("light","dark")
    x.add(themeMode)
  },[themeMode])
  return (
    <>
      <h1 className="bg-green-600 text-4xl text-center ">theme switcher</h1>
      <ThemeProvider value={{themeMode,darkTheme,lighTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeBtn/>
            <div className="w-full max-w-sm mx-auto"></div>
          <Card/>x
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
