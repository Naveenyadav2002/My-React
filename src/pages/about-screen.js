import React from 'react'
import Navbar from '../component/navbar/navbar'

function AboutScreen() {
    return (
        // <div style={{backgroundImage:url("https://tse4.mm.bing.net/th?id=OIP.hQ26i0qTyVYehx_-zUIYGAHaFO&pid=Api&P=0&h=180")}}>
        <div className='background'>
            <Navbar />
            <div style={{border:"2px ",width:"600px",marginTop:"280px",backgroundColor:"",padding:"100px"}}>
            {/* <h2>About</h2> */}
<h3><i>The online reseller platform Meesho perhaps requires no introduction. 
The platform has carved a niche for itself and has gained popularity among
 consumers and retailers alike by making online reselling and shopping 
 hassle-free and affordable. Meesho provides secure and timely transactions,
  as well as low-cost returns and shipping.</i></h3>
  </div>
        </div>
        // </div>
    )
}

export default AboutScreen