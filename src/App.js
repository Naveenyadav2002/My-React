


import ImageComponent from './component/image/image-component';
import TextComponent from './component/text/text';
import ButtonComponent from './component/button/button-component';
import OrderList from './component/list-component/order-list';
import UnorderList from './component/list-component/unorder-list';

import CardComponent from "./component/card/card-component";
import { CardComponent2 } from './component/card/card-component';
import { CardComponent3,CardComponent4,CardComponent5 } from './component/card/card-component';



function App() {
  return (
    <div>

    {/* <h2 className="na">Hello...</h2> */}
   
<CardComponent />
<CardComponent2/>
<CardComponent3/>
<CardComponent4/>
<CardComponent5/>

{/* <CardComponent/>
<CardComponent/> */}

    </div>
    
   
  );
}

export default App;
