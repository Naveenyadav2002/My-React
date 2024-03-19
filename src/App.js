

import AxiosComponent from "./component/axios/axios";
import ConditionalRender from "./component/conditional-render/render";
import SpinnerComponent from "./component/spinner/spinner";
import Count from "./component/state/counter";
import Table from "./component/state/table";

function App() {
  return (
    <>
    {/* <ConditionalRender/>
    <h2>Task-1</h2>
    <Table/>
    <h2>------------------------------</h2>
    <h2>Task-2</h2>
   <Count/> */}
   <AxiosComponent/>
   {/* <SpinnerComponent/> */}
   </>
  );
}

export default App;
