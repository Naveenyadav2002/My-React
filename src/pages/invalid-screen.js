  import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageInfo } from '../navigation/navigation'
  
  function InvalidScreen() {
    const SharedInfo=useContext(MessageInfo)
    const Navigate=useNavigate()

    const NavigatetoHome=()=>{
          Navigate("/")
    }
    return (
      <div className='bg'>
        {/* <h2>{SharedInfo.message}</h2> */}
        {/* <h2 style={{color:"red"}}>Url not found, 404 status</h2>
        <button onClick={NavigatetoHome} style={{display:"block",position:"relative",marginBottom:"200px"}}>Click TO Go Home</button> */}
        <img src="https://www.shoutmeloud.com/wp-content/uploads/2020/09/404-Error-page-SEO.jpg" width={"1500px"} heigth="800px"></img>       
        <button onClick={NavigatetoHome} style={{ position: "absolute", top: "80%", left: "25%", transform: "translate(-50% ,-50%)", zIndex: 1,padding:"10px",borderRadius:"10px",backgroundColor:"" }}>CLICK TO GO HOME</button>
      </div>
    )
  }
  
  export default InvalidScreen