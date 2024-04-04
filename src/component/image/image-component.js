



const ImageComponent=(prop)=>{
    return(
        // <img src={prop.img.image} alt="reat-logo" style={{width:"250px", height:"250px"}}></img>
        // {prop.data.image}
        <img src={prop.img.thumbnail} style={{width:"250px", height:"250px"}}></img>  
          )
}
export default ImageComponent