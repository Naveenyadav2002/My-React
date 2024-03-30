

import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "Increment Age":
            return { ...state, age: state.age + 10 };
        case "Decrement Age":
            return { ...state, age: state.age - 10 };
        case "Salary Increment":
            return { ...state, salary: state.salary + 1000 };
        case "Change Name":
            return { ...state, name: action.payload };
        case "Change Skill":
            return { ...state, skills: [...state.skills,action.payload] }
        default:
            return state
    }
}

const initialState = {
    age: 25,
    name: "Naveen",
    salary: 35000,
    skills: ["css", "html", "react"]
}

function UseReducer() {
    const [currentState, dispatch] = useReducer(reducer, initialState)
    const Increment = () => {
        dispatch({
            type: "Increment Age"
        })
    }
    const Decrement = () => {
        dispatch({
            type: "Decrement Age"
        })
    }
    const SalaryIncrement = () => {
        dispatch({
            type: "Salary Increment"
        })
    }
    const ChangeName = () => {
        dispatch({
            type: "Change Name",
            payload: "Chintu"
        })
    }
    const ChangeSkill = () => {
        dispatch({
            type: "Change Skill",
            payload: "Javascript"
        })
    }
   
    return (
        <div>
            <h1>Current age:{currentState.age}</h1>
            <button onClick={Increment}>Increment Age</button>
            <button onClick={Decrement}>Decrement Age</button>
            <h1>Salary :{currentState.salary}</h1>
            <button onClick={SalaryIncrement}>Increment salary</button>
            <h1>Name:{currentState.name}</h1>
            <button onClick={ChangeName}>ChangeName</button>
            <h2>Skills:{currentState.skills[0]}</h2>
            <button onClick={ChangeSkill}>ChangeSKill</button>
        </div>
    )
}

export default UseReducer


