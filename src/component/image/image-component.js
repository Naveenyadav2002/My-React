



const ImageComponent=(prop)=>{
    return(
        <img src={prop.img.thumbnail} alt="reat-logo" style={{width:"250px", height:"250px"}}></img>
        // {prop.data.image}
    )
}
export default ImageComponent