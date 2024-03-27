

import React, { useState } from "react";
import CardComponent, { CardComponent5 } from "../card/card-component";

const  UseStateComponent3 = () => {
  const [Names, setNames] = useState(["Naveen", "Praveen", "Kiran", "Anudeep"]);

  const AddNames = () => {
    setNames([...Names, "sai"]);
  };



const DeleteNames=()=>{

//    const updatedNames=Names.slice(0,-1)

    const updatedNames=[...Names]
    updatedNames.pop()
    setNames(updatedNames)

}

  return (
    <>
      <h2>Names listing</h2>
      <button onClick={AddNames}>Add Names</button>
      <button onClick={DeleteNames}>Delete Names</button>
      <ol>
        {Names.map((eachname, index) => (
            <>
          {/* <li key={index}>{eachname}</li> */}
          <CardComponent5 item={eachname}/>
          </>
        ))}
      </ol>
      
    </>
  );
};

export default UseStateComponent3;
