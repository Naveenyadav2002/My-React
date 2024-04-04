
import React, { useContext } from 'react'
import Navbar from '../component/navbar/navbar'
import UseReducer from '../component/useReducer/useReducer'
import UseMemo from '../component/useMemo/useMemo'
import { CounterInfo } from '../navigation/navigation'
import ParentMemo from '../component/Memo/parent'
import useCounter from '../component/customHook/useCounter'

function SettingScreen() {
    // const SharedInfo=useContext(CounterInfo)
    const [count,setCount]=useCounter(10,1)


    return (
        <div>
            <Navbar />
            {/* <h2>Counter:{SharedInfo.counter}</h2>
            <button onClick={SharedInfo.messageChanger}>change counter</button> */}
            {/* <UseReducer/> */}
            {/* <UseMemo/> */}
            {/* <ParentMemo/> */}
            <h3>counter :{count}</h3>
            <button onClick={setCount}>Increment</button>
        </div>
    )
}

export default SettingScreen