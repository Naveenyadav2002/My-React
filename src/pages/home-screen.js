import React, { useContext } from 'react'
import Navbar from '../component/navbar/navbar'
import UseEffectEx2 from '../component/useEffect/useEffectEx2'
import { MessageInfo } from '../navigation/navigation'

function HomeScreen() {
    const SharedInfo=useContext(MessageInfo)
    return (
        <div>

            <Navbar />
            {/* <h1>{SharedInfo.message}</h1> */}
            <UseEffectEx2 />
        </div>
    )
}

export default HomeScreen