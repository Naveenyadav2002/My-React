import { Link } from "react-router-dom"
import ProductScreen from "../../pages/product-details"


const ButtonComponent=(mee)=>{
    return(
        <>
        <button>
           <Link to={`/${mee.data.category}/${mee.data.id}`}>Click me</Link>
            </button>
            {/* <ProductScreen lax={mee.data}/> */}
            </>
    )
}
export default ButtonComponent