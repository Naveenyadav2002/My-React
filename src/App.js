

import ConditionalRender from "./component/conditional-render/render";
import Count from "./component/state/counter";
import Table from "./component/state/table";

function App() {
  return (
    <>
    {/* <ConditionalRender/> */}
    <h2>Task-1</h2>
    <Table/>
    <h2>------------------------------</h2>
    <h2>Task-2</h2>
   <Count/>
   </>
  );
}

export default App;
