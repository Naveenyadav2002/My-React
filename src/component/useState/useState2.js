
import { useState } from "react"

const UseStateComponent2 = () => {
    const [Timer, setTimer] = useState(100)

    const StartTimer = () => {
        // setTimer(Timer - 1)
        setInterval(()=>{
            // console.log("log")
            setTimer(Timer=>Timer-1)
        },1000)
    }
    return (
        <>
        <h2>Timer</h2>
            <h2>Timer value {Timer}</h2>
            <button onClick={StartTimer}>Start Timer</button>
        </>
    )
}
export default UseStateComponent2