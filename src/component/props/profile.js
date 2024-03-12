import NewComponent from "./text-copomnent"




function Profile(){
    const data={
        name:"Naveen",
        age:23,
        place:"Nalgonda"
    }
    return(
        <>
        {/* parent prop */}
        {/* <NewComponent prop={data}/> */}
        {/* children prop */}
        <NewComponent >
        {data}
         {/* hello world  */}
             </NewComponent> 
            </>

           
    )
}
export default Profile