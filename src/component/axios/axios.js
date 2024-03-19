import { Component } from "react";
import axios from "axios";
import CardComponent from "../card/card-component";
import SpinnerComponent from "../spinner/spinner";
import React from "react";



class AxiosComponent extends Component {
    constructor() {
        super()
        this.state = {
            UserCollection: []
        }
    }
    fetch = () => {
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(response=>
        //     this.setState({
        //         UserCollection:response
        //     })
        // )
        axios.get('https://fakestoreapi.com/products')
        
            .then(response =>{
                // console.log(response)
                if(response.status===200){
                    this.setState({
                        UserCollection: response.data
                    })
                }
                else{
                    alert("something went wrong")
                }
            }   
            )
    }
    productSort=()=>{
        let result=this.state.UserCollection.sort((a,b)=>a.price-b.price)
          this.setState({
              UserCollection:result
          })
  
      }

    render() {
        return (
            <>
                <h3>User collection</h3>
                <button onClick={this.fetch}>click for fectch data</button>
                <button onClick={this.productSort}>sort</button><br></br>
                {
                    this.state.UserCollection.length > 0 ? this.state.UserCollection.map((eachobj) => {
                        return (
                            <React.Fragment key={eachobj.id}>
                                <CardComponent item={eachobj} />
            {/* without CardComponent */}
      {/* <h2>{eachobj.title}</h2>
     <h3>{eachobj.category}</h3>
    <img src={eachobj.image} style={{width:"200px"}}></img>
    <h2>${eachobj.price}</h2> */}

                            </React.Fragment>
                        )
                    })
                        :
                        <>
                            {/* <SpinnerComponent/>  
                <h3>data fetching</h3> */}
                        </>
                }
            </>
        )
    }

}
export default AxiosComponent

