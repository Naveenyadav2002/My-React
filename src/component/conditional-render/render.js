


const ConditionalRender=()=>{
    let arrObj=[
        {
            name:'Naveen',
            marks:75,
            id:1
        },
        {
            name:'Kiran',
            marks:55,
            id:2
        },
        {
            name:'Praveen',
            marks:85,
            id:3
        },
        {
            name:'Meenakshi',
            marks:95,
            id:4
        },
        {
            name:'Prasanna',
            marks:35,
            id:5
        }
    ]
   

    return (
        <div >
            {
                arrObj.map((eachObj)=>{
                    const {marks,name,id}=eachObj
                    return(
                        <div key={id}>
                  {/* name of the eachobj */}
                        <h3 style={{color:"blue"}}> {name}</h3>

                {/* marks of the eachObj */}
                        <h3 style={{color:"grey"}}>Marks Obtained - {marks}</h3>

                {/* Grades of eachObj */}          
               { marks>90 ? <h4 style={{color:"green"}}>Grade A++ </h4> :  marks>80 ? <h4>Grade A </h4> : marks>70 ? <h4>Grade B </h4> : 
                marks>60 ? <h4>Grade C </h4> : marks>50 ? <h4>Grade D </h4> : marks>40 ?  <h4>Pass</h4> : <h4 style={{color:"red"}}>Better Luck Next Time</h4> }

                {/* line for eachObj */}
                 <div style={{width:"20%",heigth:"",border:"2px solid black"}}></div>
                           

                        </div>
                    )

                })
            }

        </div>
    )
}
export default ConditionalRender