

import React, { useContext, useEffect } from 'react'
import ButtonComponent from '../component/button/button-component'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import LoadingSpinner from '../component/spinner/loading'
import { CardComponent3 } from '../component/card/card-component'
import { CounterInfo } from '../navigation/navigation'

function ProductScreen() {
   const ParamsInformation = useParams()
   const [Product, setProduct] = useState({})
   console.log(ParamsInformation.id)
   useEffect(() => {
      //   axios.get(`https://dummyjson.com/products/${ParamsInformation.id}`)
      FetchData()
   }, [ParamsInformation.id])

   async function FetchData() {
      const result = await axios.get(`https://dummyjson.com/products/${ParamsInformation.id}`)
      console.log(result)
      if (result.status === 200) {
         setProduct(result.data)
      }
   }

   function isEmpty(data) {
      return Object.keys(data).length === 0

   }
 
  const SharedInfo= useContext(CounterInfo)

   return (
      <div>
         {
            isEmpty(Product)
               ?
               <center><LoadingSpinner /></center>
               :
               <>
               <h1>{SharedInfo.message}</h1>
               
                  <div className="eachProduct" >
                     <img src={Product.thumbnail} width="300px" height="250px"></img>
                     <h2>TITLE : <i style={{ color: "chocolate" }}>{Product.title}</i></h2>
                     <h2>Category : <i style={{ color: "blue" }}>{Product.category}</i></h2>
                     <b>Description : <i>{Product.description}</i></b>
                     <h3>Price : ${Product.price}</h3>
                     <button style={{ backgroundColor: "green", borderRadius: "5px" }}>ADD TO CART</button>
                  </div>
               </>


         }
      </div>
   )
}

export default ProductScreen