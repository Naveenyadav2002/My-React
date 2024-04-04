

import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [Counter1, setCounter1] = useState(5)
    const [Counter2, setCounter2] = useState(5)
    // function isEven(){
    //     for(let i=0;i<1000;i++){
    //         console.log(i)
    //     }
    //         console.log("isEven checker")
    //         return Counter1 % 2 == 0 ? "EVEN" : "ODD"
    //     }
    // }

    const isEven = useMemo(() => {
        // for(let i=0;i<1000;i++){
        //     console.log(i)
        // }
        console.log("isEven checker")
        return Counter1 % 2 == 0 ? "EVEN" : "ODD"
    }, [Counter1])
    return (
        <div>
            <h3>{isEven} :Counter A</h3>
            <h2>Counter A: {Counter1}</h2>
            <button onClick={() => { setCounter1(Counter1 + 1) }}>Change counter A</button>
            <h2>Counter B: {Counter2}</h2>
            <button onClick={() => { setCounter2(Counter2 + 1) }}>Change counter B</button>

        </div>
    )
}

export default UseMemo