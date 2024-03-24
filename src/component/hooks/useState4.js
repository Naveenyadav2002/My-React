
import { useState } from "react"

const UseStateComponent4 = () => {
    const [Names, setNames] = useState([{ key: 1, name: "Naveen", batch: "99 batch" },
                                        { key: 2, name: "Kiran", batch: "98 batch" },
                                        { key: 3, name: "Praveen", batch: "97 batch" }])

    const AddNames = () => {
        const updatedNames = [...Names, { key: 4, name: "Anil", batch: "99 batch" },{key: 5, name: "suresh", batch: "199 batch" }]
        setNames(updatedNames)
    }
    const DeleteNames = () => {
        const updatedNames = [...Names]
        updatedNames.pop()
        setNames(updatedNames)

    }

    return (
        <>
            <h2>Hello </h2>
            <button onClick={AddNames}>AddNames</button>
            <button onClick={DeleteNames}>Delete Names</button>
            <ol>{
                // Names.map(eachname=><li>I am {eachname.name+" from "+eachname.batch}</li>)
                Names.map(eachname => <li>I am {eachname.name} from {eachname.batch}</li>)
            }</ol>

        </>
    )
}
export default UseStateComponent4