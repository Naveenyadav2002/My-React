



const ImageComponent=(prop)=>{
    return(
        <img src={prop.data.image} alt="reat-logo" style={{width:"150px", height:"150px"}}></img>
        // {prop.data.image}
    )
}
export default ImageComponent