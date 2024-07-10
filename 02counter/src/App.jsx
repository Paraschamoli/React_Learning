import { useState } from "react";


function App() {
  //let currvalue = 0;
  let [currval,setcurr]=useState(0)
  const addval=()=>{
    setcurr(currval+1)
    setcurr(currval+1)
    setcurr(currval+1)
    // multiple setcurr not going to work all
    // because it goes in batches and go in one time
    //setcurr(prevcurrval=>prevcurrval+1)   
    // use above method to use multiple setcurr 
  }
  const subval=()=>{
   if(currval>0){ 
    setcurr(currval-1);
  }
  }
  return (
    <>
      <h1>in project 2</h1>
      <h2>current value:{currval}</h2>  
      {/* currval is an expression{evalueated expression} */}
      <button onClick={addval}>add value</button>
      <br />
      <button onClick={subval}>sub value</button>
    </>
  );
}

export default App;
