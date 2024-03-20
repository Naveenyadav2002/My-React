import { Component } from "react";





class UpdatingComponent extends Component {
    constructor() {
        console.log("constructor")
        super()
        this.state = {
            count: 0,
            message: "hello"

        }
    }

    // state = {
    //     count: 0,
    //     message:"hello"
    // }
    Increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount = () => {
        console.log("componentDidMount")
        document.title = `React-app ${this.state.count}`
    }
    shouldComponentUpdate = () => {
        console.log("should component update")
        // we use in optimization purpose , in pure components
        return true
    }
    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log(previousState, "previousState")
        return null
    }
    componentDidUpdate = () => {
        console.log("componentDidUpdate")
        document.title = `React app ${this.state.count}`
    }
    static getDerivedStateFromProps(props, state) {
        console.log("setDerivedStateFromProps")
        return { message: props.messages }
    }

    render() {
        console.log("render")
        return (
            <>
                <h3>{this.state.message}</h3>
                <h2 >counter:{this.state.count}</h2>
                <button onClick={this.Increment}>increment</button>
            </>
        )
    }
}
export default UpdatingComponent