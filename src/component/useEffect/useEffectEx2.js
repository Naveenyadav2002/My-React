
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardComponent5 } from "../card/card-component";
import LoadingSpinner from "../spinner/loading";
import SortbyPrice from "../../pages/sortbyPrice";

const UseEffectEx2 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                if (response.status === 200) {
                    setProducts(response.data.products);
                } else {
                    alert("Something went wrong");
                }
            });
    }, []);

    const sortProductsByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    return (
        <>
            {products.length > 0 ? (
                <>
                {/* <SortbyPrice item={sortProductsByPrice}/> */}
                    <button onClick={sortProductsByPrice}>Sort by Price</button><br></br>
                    {products.map((eachobj) => (
                        <React.Fragment key={eachobj.id}>
                            <CardComponent5 item={eachobj} />
                        </React.Fragment>
                    ))}
                </>
            ) : (
                <center>
                    <h1>Welcome to Meeshoo</h1>
                    <img
                        src="https://www.digitalgabbar.com/wp-content/uploads/2020/04/meesho.jpg"
                        height="400px"
                        width={"300px"}
                        alt="Meeshoo"
                    />
                    <br />
                    <LoadingSpinner />
                </center>
            )}
        </>
    );
};

export default UseEffectEx2;
