// import { useRef } from "react"
// import { useState } from "react"


// const Controlled = () => {
//   const [username, setUsername] = useState("")
//   const [userPassword,setuserPassword]=useState("")
//   const [userPasswordError,setuserPasswordError]=useState("")
//   const [usernameError, setUsernameError] = useState("")
//   const usernameHandler = (event) => {
//     const username = event.target.value
//     const userPassword=event.target.value
//     // console.log(event.target.value)
//     setUsername(username)
//     setuserPassword(userPassword)
//     if (username.length > 5 && userPassword.length > 5) {
//       // alert("username must be lessthan 5")
//       setUsernameError("username must be greaterthan 5 letters")
//       setuserPasswordError("userPassword must be lessthan 5 letters")
//     }
//     else {
//       setUsernameError("")
//       setuserPassword("")
//       let userInformation = {
//         username: username,
//         userPassword:userPassword
//       }
//       console.log(userInformation)
//     }
//     console.log("usertyping")
//   }
//   return (
//     <>
//       <h2>hellooo</h2>
//       <form >
//         <div className="mb-3 mt-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             name="email"
//             value={username}
//             onChange={usernameHandler}

//           />

//         </div>
//         {
//           usernameError
//             ?
//             <h5 style={{ color: "red" }}>{usernameError}</h5>
//             :
//             null
//         }

//         <div className="mb-3">
//           <label htmlFor="pwd" className="form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="pwd"
//             placeholder="Enter password"
//             name="pswd"
//             value={userPassword}
//             onChange={usernameHandler}

//           />
//           {
//           userPasswordError
//             ?
//             <h5 style={{ color: "red" }}>{userPasswordError}</h5>
//             :
//             null
//         }
//         </div>
//         <div className="form-check mb-3">
//           <label className="form-check-label">
//             <input className="form-check-input" type="checkbox" name="remember" />{" "}
//             Remember me
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </>
//   )
// }
// export default Controlled

import { useState } from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const usernameHandler = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setUsername(value);
      if (value.length >=7) {
        setUsernameError("Username must be lessthan than 5 letters");
      } else {
        setUsernameError("");
      }
    } else if (name === "pswd") {
      setUserPassword(value);
      if (value.length >= 5) {
        setUserPasswordError("Password must be lessthan than 5 letters");
      } else {
        setUserPasswordError("");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle form submission here
    console.log("Form submitted with:", { username, userPassword });
  };

  return (
    <>
      <h2>Controlled Component</h2>
      <form onSubmit={handleSubmit}>
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
            value={username}
            onChange={usernameHandler}
          />
          {usernameError && (
            <h5 style={{ color: "red" }}>{usernameError}</h5>
          )}
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
            value={userPassword}
            onChange={usernameHandler}
          />
          {userPasswordError && (
            <h5 style={{ color: "red" }}>{userPasswordError}</h5>
          )}
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
  );
};

export default Controlled;
