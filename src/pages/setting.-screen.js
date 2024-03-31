
import React, { useContext } from 'react'
import Navbar from '../component/navbar/navbar'
import UseReducer from '../component/useReducer/useReducer'
import UseMemo from '../component/useMemo/useMemo'
import { CounterInfo } from '../navigation/navigation'
import ParentMemo from '../component/Memo/parent'

function SettingScreen() {
    const SharedInfo=useContext(CounterInfo)
    return (
        <div>
            <Navbar />
            <h2>Counter:{SharedInfo.counter}</h2>
            <button onClick={SharedInfo.messageChanger}>change counter</button>
            {/* <UseReducer/> */}
            {/* <UseMemo/> */}
            
        </div>
    )
}

export default SettingScreen