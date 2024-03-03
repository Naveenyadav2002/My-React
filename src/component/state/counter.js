import { Component } from "react";




class Count extends Component{

    constructor(){
        super()
        this.state={
            counter:0,
            isSubscribed:false
        }
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    decrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    reset=()=>{
        this.setState({
            counter:0
        })
    }
    handlesubscribe=()=>{
        this.setState({
            isSubscribed:!this.state.isSubscribed  
        })

    }
     
    render(){
        return (
            <>
            <button onClick={this.handlesubscribe}>
            {this.state.isSubscribed ? "Unsubscribe": "Subscribe"}
            </button>
            {
                this.state.isSubscribed ?  
                <>
                <h1>hello</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                </>
                :
                <h2>please...subscribe</h2>

            }
              

              </>
        )

        
    }

}
export default Count

