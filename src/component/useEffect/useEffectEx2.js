

// {/* const sortProductsByPrice = () => {
//         const sortedProducts = [...products].sort((a, b) => a.price - b.price);
//         setProducts(sortedProducts);
//     }; */}
//      {/* <SortbyPrice item={sortProductsByPrice}/> */}
//                     {/* <button onClick={sortProductsByPrice}>Sort by Price</button><br></br> */}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardComponent5 } from "../card/card-component";
import LoadingSpinner from "../spinner/loading";
import SortbyPrice from "../../pages/sortbyPrice";
import useAxios from "../customHook/useAxios"

const UseEffectEx2 = () => {
    const [products, setProducts] = useState([]);
    // const [products] = useAxios()
    // console.log(products)

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                // if (response.data && response.data.products && response.data.products.length > 0) {
                    setProducts(response.data.products);
                // } else {
                //     alert("No products found");
                }
            )
            // .catch((error) => {
            //     console.error("Error fetching products:", error);
            //     alert("Something went wrong");
            // });
    }, []);

    return (
        
        <>
            {

                products.length > 0 ? (
                    <>

                        {
                          products.map((eachobj) => {
                                return (
                                    <>
                                        <CardComponent5 key={eachobj.id} item={eachobj} />
                                       
                                    </>
                                )

                            })
                        }
                    </>
                ) : (
                    <center>
                        <h1>Welcome to Meeshoo</h1>
                        <img
                            src="https://www.digitalgabbar.com/wp-content/uploads/2020/04/meesho.jpg"
                            height="400px"
                            width="300px"
                            alt="Meeshoo"
                        />
                        <br />
                        <LoadingSpinner />
                    </center>
                )}
        </>
    );
};

export default UseEffectEx2
