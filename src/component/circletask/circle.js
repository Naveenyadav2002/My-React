import { Component } from "react";
import "./style.css"

class CircleComponent extends Component {
    constructor() {
        super()
        this.state = {
            circles: []
        }
    }
    AddCircles = () => {
        this.setState({
            circles: [...this.state.circles, false],

        })
       
    }
    DeleteCircles = () => {
       let del=[...this.state.circles]
     
       del.pop()
    //    del=del.slice(0,-1)
        this.setState({
         circles: del
        })
    }

      
    render() {
        return (
            <>
                <h2>circle task</h2>
                <button onClick={this.AddCircles}>Add Circles {this.state.circles.length}</button>
                <button onClick={this.DeleteCircles}>Delete Circles</button>
                {
                    this.state.circles.length > 0
                        ?
                        this.state.circles.map(flag => <div className="circle" style={{ backgroundColor: flag ? "black" : "white" }}>
                            

                        </div>)
                        :
                        <h3>no circles found</h3>}

            </>
        )
    }
}
export default CircleComponent