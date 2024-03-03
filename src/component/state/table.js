
import React, { Component } from "react";

class Table extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            dev: ""
        };
    }

    tb1 = (employeeName) => {
        this.setState({
            id:1,
            name: employeeName,
            dev:"react"
        });
    };

    tb2 = (employeeName) => {
        this.setState({
            id:2,
            name: employeeName,
            dev:"java"
        });
    };
    tb3 = (employeeName) => {
        this.setState({
            id:3,
            name: employeeName,
            dev:"Angular"
        });
    };


    render() {
        return (
            <>
                <button onClick={() => this.tb1("naveen")}>employee-1</button>
                <button onClick={() => this.tb2("kiran")}>employee-2</button>
                <button onClick={() => this.tb3("praveen")}>employee-3</button>
                

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Dev</th>
                        </tr>
                    </thead>
                     <tbody> 
                        <tr>
                             <td>{this.state.id}</td>
                            <td>{this.state.name}</td>
                            <td>{this.state.dev}</td> 
                        </tr>
                     </tbody> 
                </table>
            </>
        );
    }
}
export default Table;
