import { Component } from "react";




class Parent extends Component {
    state = {
        isChildVisible: true
    }
    Toggle = () => {
        this.setState({
            isChildVisible: !this.state.isChildVisible
        })
    }
    render() {
        return (
            <>
                {/* <h1>i am parent</h1> */}
                <button onClick={this.Toggle}>Toggle the Child</button>
                {
                    this.state.isChildVisible ?
                        <Child />
                        :
                        <h2>Child Hidden</h2>
                }
            </>  
        )
    }
}
export default Parent

class Child extends Component {
    componentWillUnmount() {
        alert("component is removed")
    }
    render() {
        return (
            <>
                <h2>Child Visible</h2>

            </>
        )
    }
}