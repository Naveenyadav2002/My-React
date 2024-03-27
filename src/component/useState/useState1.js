import { useState } from "react"

const UseStateComponent1 = () => {
    const [counter, setCounter] = useState(0)

    //     const Increment = () => {
    //    //   setCounter((counter)=>{return counter+1})
    //         setCounter(counter + 1)
    //     }
    //     const Decrement = () => {
    //         setCounter(counter - 1)
    //     }
    //     const Reset=()=>{
    //         setCounter(0)
    //     }
    const ChangeCounter = (value) => {
        switch (value) {
            case "increment": setCounter(counter + 1);
                break;
            case "decrement": setCounter(counter - 1);
                break;
            case "reset": setCounter(0); 
                break;
            default: break
        }

    }
    return (
        <>
            <h2>Use state example 1</h2>
            <h3>Current counter {counter}</h3>
            <button onClick={() => ChangeCounter("increment")}>Increment</button>
            <button onClick={() => ChangeCounter("decrement")}>Decrement</button>
            <button onClick={() => ChangeCounter("reset")}>Reset</button>
        </>
    )
}

export default UseStateComponent1