



const ImageComponent=(prop)=>{
    console.log(prop.ImageUrl)
    return(
        <img src={prop.ImageUrl} alt="hello"></img>
    )
}
export default ImageComponent