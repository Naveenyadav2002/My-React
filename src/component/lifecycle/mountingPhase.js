import { Component } from "react";
import axios from "axios";
import LoadingSpinner from "../spinner/loading";
import React from "react";
import CardComponent from "../card/card-component";



class MountingComponent extends Component {
    constructor() {
        super()
        this.state = {
            message: "Good morning",
            products: [],
            message: "hello"
        }
    }
    componentDidMount() {
        axios.get("https://dummyjson.com/users")
            .then(response =>
                // console.log(response)
                this.setState({
                    products: response.data.users
                })
            )
    }
    static getDerivedStateFromProps(props, state) {
        return { message:props.message }

    }
    render() {
        return (
            <>
                <h2 >{ this.state.message}</h2>
                {/* <SpinnerComponent/>
            <h2>data fetching</h2> */}
                {
                    this.state.products.length > 0 ? this.state.products.map(eachobj => {
                        return (

                            <React.Fragment key={eachobj.id}>
                                <CardComponent item={eachobj} />
                                {/* <h3>{eachobj.title}</h3> */}
                            </React.Fragment>)


                    })
                        :
                        <>
                            <h3>Data fetching</h3>
                            <LoadingSpinner />



                        </>
                }
            </>
        )
    }
}
export default MountingComponent