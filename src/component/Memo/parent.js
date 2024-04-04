

import React, { useState } from 'react'
import ChildMemo from './child'

function ParentMemo() {
    const [count,setCount]=useState(0)

  const  Increment=()=>{
        setCount(count+1)
    }
    console.log("parent re-render")
  return (
    <div>
        <h2>counter:{count}</h2>
        <button onClick={Increment}>change count</button>
        <ChildMemo/>
    </div>
  )
}

export default ParentMemo