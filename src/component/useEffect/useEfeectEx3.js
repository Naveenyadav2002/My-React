import { useEffect, useState } from "react"

import axios from "axios"


const UseEffectEx3=()=>{
    const[X,setX]=useState(null)
    const[message,setMessage]=useState({image:"https://wallpapercave.com/wp/wp8976262.jpg"})
    useEffect(()=>{
//    console.log("useEffect")
// window.addEventListener("click",(event)=>{
// // console.log("mouse moving event capturing ",event)
// setX(event.clientX)
// console.log(event.clientX,"x-axis")
// console.log(event.clientY,"y-axis")
// })

window.addEventListener("click", myFunction);
function myFunction(event) {
    setX(event.clientX)
    setMessage({image:"https://cdn-wp.thesportsrush.com/2022/11/4a11ecae-untitled-design-2022-11-03t010036.666.jpg"}
)
}
    },[])
    return(
        <>
       <h1>Event Listeners</h1>
       {/* <h2>X-axis {X}</h2> */}
      <center><img src={message.image} width="500px"/></center>
     
        </>
    )
}
export default UseEffectEx3