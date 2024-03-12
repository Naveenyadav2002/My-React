



const NewComponent=(nav)=>{
    // const {name,age,place}=nav.prop
    const {name,age,place}=nav.children
return(
    <>
<h2>My name is : {name}</h2> 
 <h2>My age is : {age}</h2>
 <h2>I am From : {place}</h2>
</>
)


}
export default NewComponent