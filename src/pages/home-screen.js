
import { useContext } from 'react'
import Navbar from '../component/navbar/navbar'
import UseEffectEx2 from '../component/useEffect/useEffectEx2'
import { CounterInfo } from '../navigation/navigation'

function HomeScreen() {
     const SharedInfo= useContext(CounterInfo)
   
    return (
        <div>

            <Navbar />
            {/* <button  onClick={SharedInfo.messageChanger} >change msg</button> */}
           <h1>Counter :{SharedInfo.counter}</h1>
           <button onClick={SharedInfo.messageChanger}>Change Counter</button>
          
           
            <UseEffectEx2 />
        </div>
    )
}

export default HomeScreen

// import React, { useContext } from 'react';
// import Navbar from '../component/navbar/navbar';
// import UseEffectEx2 from '../component/useEffect/useEffectEx2';
// import { CounterInfo } from '../navigation/navigation';

// function HomeScreen() {
//     const SharedInfo = useContext(CounterInfo);

//     return (
//         <div>
//             <Navbar />
//             <h1>Counter: {SharedInfo.counter}</h1>
//             <button onClick={SharedInfo.messageChanger}>Change Counter</button>
//             <UseEffectEx2 />
//         </div>
//     );
// }

// export default HomeScreen;
