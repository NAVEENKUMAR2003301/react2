import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

  let [count,setCount] = useState(0)
  let [count1,setCount1] = useState(0)
  

   
  useEffect(()=>{
    console.log("this effect will run after every render");
    
  })


  useEffect(()=>{
    console.log("this effect will run only on intial render");
    
  },[])

  useEffect(()=>{
    console.log("this effect will run only dependency or that state change");
    
  },[count])


  return (
    <div>

      <h1>Count - {count} {count1}</h1>

      <button onClick={()=>setCount(count+1)}> Increase</button>
      <button onClick={()=>setCount1(count1-1)}> Decrease</button>
      
    </div>
  )
}

export default UseEffect1
