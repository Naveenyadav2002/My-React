import { useRef } from "react"
import { useState } from "react"



const Uncontrolled=()=>{
   const usernameRef =useRef(null)
   const userPasswordRef=useRef(null)

   const submitHandler=(event)=>{
    // debugger;
    // prevents the auto submission of the form
     event.preventDefault()
     const username=usernameRef.current.value
    const userpassword=userPasswordRef.current.value
    //  console.log(username,userpassword)

    if(username.length<7 && userpassword.length<7){
        alert("username must be greater than 7 letters")
    }
    else{
        let userInfo={
            username:username,
            password:userpassword
         }
         console.log(userInfo )
    }
    
    
   }
    return(
        <>
        <h2>Uncontrolled form</h2>
        <form onSubmit={submitHandler}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={usernameRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={userPasswordRef}
    />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}
export default Uncontrolled