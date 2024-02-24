


import ImageComponent from './component/image/image-component';
import TextComponent from './component/text/text';
import ButtonComponent from './component/button/button-component';
import OrderList from './component/list-component/order-list';
import UnorderList from './component/list-component/unorder-list';


function App() {
  return (
    <div>

    <h2 className="na">Hello...WORLD</h2>
    <TextComponent/>
    <ImageComponent/><br></br>
    {/* <h2>Hello</h2> */}
    <h3>Today's components</h3>
    <b>Orderlist</b>
    <OrderList/>
    <b>Unorderlist</b>
    <UnorderList/>
    <ButtonComponent/>
    </div>
    
   
  );
}

export default App;
