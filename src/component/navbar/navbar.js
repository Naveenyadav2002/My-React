

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const linkStyle = {
        margin: "50px",
        textDecoration: "none",
    }
    // const navbarStyle = {
    //     position: "fixed",
    //     top: 0,
    //     width: "100%",
    //     zIndex: 1000 // You can adjust the z-index as needed
    // }

    return (
        <>
            {/* Grey with black text */}
            <nav className="navbar navbar-expand-sm bg-light navbar-light" style={{ height: "100px", backgroundColor: "green", lineHeight: "100px" }}>
                <div className="container-fluid">
                    <ul className="navbar-nav" style={{ listStyleType: "none", textDecoration: "none", display: "flex" }}>
                        <li className="nav-item">

                            <Link to="/" style={linkStyle}>
                                Home
                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link to="/About" style={linkStyle}>
                                About
                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link to="/Contact" style={linkStyle}>
                                Contact
                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link to="/Setting" style={linkStyle}>
                                Settings
                            </Link>

                            {/* <img src="https://www.digitalgabbar.com/wp-content/uploads/2020/04/meesho.jpg"></img> */}

                        </li>
                        <li>
                        <Link to="/SortbyPrice" style={linkStyle}>
                                Sort
                            </Link>
                        </li>
                        {/* <li style={{marginLeft:"450px"}}><img src="https://www.digitalgabbar.com/wp-content/uploads/2020/04/meesho.jpg" width="400px" height={"100px"}></img></li> */}
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Navbar
