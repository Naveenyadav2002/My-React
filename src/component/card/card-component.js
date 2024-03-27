

import ImageComponent from "../image/image-component"
import TextComponent from "../text/text"
import ButtonComponent from "../button/button-component"
import { Link } from "react-router-dom"


const CardComponent=(get)=>{
    return(
        <div className="hey">
            <div className="card">
         <ImageComponent data={get.item}/>
        {/* <TextComponent/> */}
        <h4>{get.item.firstName}
            
        </h4>
        <h4>Age:{get.item.age}</h4>
        <ButtonComponent/>
        </div>
        </div>
    )
}
export default CardComponent

export const CardComponent2 =()=>{
    return(
        <div className="card" id="node">
            <img src="https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" width="270px"></img>
            <h2>Welcome to node.js</h2>
            <p>Node.js accepts the request from the clients and sends the response,
                 while working with the request node.js handles them with a single thread
        </p>
        <ButtonComponent/>
        </div>
    )
}

export const CardComponent3 =()=>{
    return(
        <div className="card" id="js">
            <img src="https://th.bing.com/th?id=OIP.zJolqY5gcB9coeVnBqQr-QHaIZ&w=234&h=266&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="140px"></img>
            <h2>Welcome to Javascript</h2>
            <p>JavaScript (JS) is the most popular programming language for web development. 
                It serves a dual purpose, being used both on the client-side and server-side.
        </p>
        <ButtonComponent/>
        </div>
    )
}

export const CardComponent4 =()=>{
    return(
        <div className="card" id="css">
            <img src="https://th.bing.com/th?id=OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="140px"></img>
            <h2>Welcome to CSS</h2>
            <p>CSS (Cascading Style Sheets) is a simply designed language intended to simplify 
                the process of making web pages presentable. CSS allows you to apply styles to HTML documents
        </p>
        <ButtonComponent/>
        </div>
    )
}

export const CardComponent5 =(prop)=>{
    return(
        <div className="card" id="html">
            {/* <img src={prop.item.image} width="140px"></img> */}
            <ImageComponent img={prop.item}/>
            <h2>{prop.item.title}</h2>
           <h3>{prop.item.category}</h3>
           <b style={{display:"block"}}>${prop.item.price}</b>
        <ButtonComponent data={prop.item}/>
    
        </div>
    )
}

