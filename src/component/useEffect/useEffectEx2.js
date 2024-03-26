
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import React from "react"
import { CardComponent5 } from "../card/card-component"
import LoadingSpinner from "../spinner/loading"



const UseEffectEx2 = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // console.log("useEffect")
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                // console.log(response)
                if (response.status === 200) {
                    setProducts(response.data.products)
                }
                else {
                    alert("something went wrong")
                }
            }
            )
    },[] )

    return (

        <>

            {
                products.length > 0
                    ?

                    products.map(eachobj => {
                        return (

                            <React.Fragment key={eachobj.id}>

                                {/* <h3>{eachobj.title}</h3> */}
                                {/* <img src={eachobj.thumbnail}></img> */}
                                {/* <h2>{eachobj.category}</h2> */}
                                <CardComponent5 item={eachobj} />
                            </React.Fragment>
                        )
                    })
                    :
                    <>
                        <h1>products Loading</h1>
                        <LoadingSpinner />
                    </>
            }

            {/* {
            carts.length>0
            ?
        carts.map((eachcart)=>{
            console.log(eachcart.products.title)
            return(
                <React.Fragment key={carts.id}>
                <h2>{eachcart.products.title}</h2>
                </React.Fragment>
            )
        })
        :
        <h3>items are loading</h3>
        } */}
        </>
    )
}
export default UseEffectEx2