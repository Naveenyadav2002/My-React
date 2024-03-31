

import React, { useState } from 'react'

function ParentMemo() {
    const [count,setCount]=useState(0)
    
  const  Increment=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>counter:{count}</h2>
        <button onClick={Increment}>change count</button>
    </div>
  )
}

export default ParentMemo