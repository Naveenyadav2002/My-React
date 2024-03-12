import CardComponent, { CardComponent5 } from "../card/card-component"
import { CardComponent2 } from "../card/card-component"
import { CardComponent3,CardComponent4 } from "../card/card-component"
import FakeStoreAccordionComponent from "../ReactBootstrap/fakestore-accordion"







const Bootstrap=(nav)=>{
    return(
        <>
        
        
  <div className="jumbotron text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <h3>Column 1</h3>
        <CardComponent4 />
        {/* {nav.boo.description} */}
       

      </div>
      <div className="col-sm-4">
        <h3>Column 2</h3>
        <CardComponent2/>
      </div>
      <div className="col-sm-4">
        <h3>Column 3</h3>
       <CardComponent3/>
      
      </div>
    </div>
  </div>
</>

 


        
        
        
        
    )
}
export default Bootstrap