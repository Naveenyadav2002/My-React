

import ImageComponent from "../image/image-component"
import TextComponent from "../text/text"
import ButtonComponent from "../button/button-component"
import Bootstrap from "../styles/bootstrap"



 const CardComponent=(props)=>{
    const {title,image,category,price}=props.item

    return(
        <>
           <div className="card">

         <ImageComponent ImageUrl={image}/> 
         
        {/* <TextComponent/> */}
        <h3 >{category}</h3>
        <p>{title}</p>
        
         <h4>${price}</h4>
         <ButtonComponent/>

         </div>
        </>
    )
}
export default CardComponent 

export const CardComponent2 =()=>{
    return(
        <div className="card" id="node">
            <img src="https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" width="270px" alt="node.js logo"></img>
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
            <img src="https://th.bing.com/th?id=OIP.zJolqY5gcB9coeVnBqQr-QHaIZ&w=234&h=266&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="140px" alt="js logo"></img>
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
            <img src="https://th.bing.com/th?id=OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="140px" alt="css logo"></img>
            <h2>Welcome to CSS</h2>
            <p>CSS (Cascading Style Sheets) is a simply designed language intended to simplify 
                the process of making web pages presentable. CSS allows you to apply styles to HTML documents
        </p>
        <ButtonComponent/>
        </div>
    )
}

export const CardComponent5 =()=>{
    return(
        <div className="card" id="html">
            <img src="https://th.bing.com/th?id=OIP.QQUTcBAmVvxoiZ0CRJy5rwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="140px" alt="html logo"></img>
            <h2>Welcome to HTML</h2>
            <p>HTML stands for HyperText Markup Language. It is used to design web pages using a markup language.
                 HTML is a combination of Hypertext and Markup language.
        </p>
        <ButtonComponent/>
        </div>
    )
}

