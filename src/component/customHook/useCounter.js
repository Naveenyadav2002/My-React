import { useState } from "react"

function useCounter(initial,value) {
    const [count,setCount]=useState(initial)

    const changeCount=()=>{
        setCount(count+value)
    }
  return [count,changeCount]
}

export default useCounter