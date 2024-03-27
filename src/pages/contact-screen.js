import React from 'react'
import Navbar from '../component/navbar/navbar'
function ContactScreen() {
    return (
        <div>
            <Navbar />
            <div className='contactbg'>
                <div style={{marginTop:"260px",marginLeft:"800px",display:"inline-block",paddingBottom:"200px"}}>
            <h2><ins>If Yuh Have any Queries Contact below</ins></h2>
            <h3>Meesho Customer Care Number: +918061799600</h3>
            <h3>Meesho Customer Care Email:   support@meesho.com</h3>
            </div>
            </div>
        </div>
    )
}

export default ContactScreen