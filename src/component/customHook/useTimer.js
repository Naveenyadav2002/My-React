import { useState } from "react"

 function useTimer(initial,value){
    const [timer,setTimer]=useState(initial)

    const ChangeTimer=()=>{
       setInterval(()=>{setTimer(timer=>timer-value)},1000) 
    }
return [timer,ChangeTimer]


}
export default useTimer

