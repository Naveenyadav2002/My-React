
import { useEffect } from "react"
import { useState } from "react"


const UseEffectEx1 = () => {
    const [count, setCount] = useState(0)
   const Increment=()=>{
       setCount(count+1)
    }
    useEffect(() => {
        document.title =`Current count ${count}`
            console.log("useEffect")
    }, [count])
    return (
        <>
            <h1>Dom Manuplation</h1>
            <h2>Current count {count}</h2>
            <button onClick={Increment}>Increment</button>
        </>
    )
}
export default UseEffectEx1