import { useState,useEffect } from "react"
import axios from "axios"
function useAxios() {
    const [dataitems,setData]=useState([])

    useEffect(()=>{
          fetchData()  
    },[])

    async function fetchData(){
      const result= await axios.get("https://fakestoreapi.com/products")
      console.log(result.data)
      // console.log("https://dummyjson.com/products")
      // .then((result)=>{
        setData(result.data)
        console.log(result.data)
      // })
      }
      // console.log(data)

  return [dataitems] 
}

export default useAxios

