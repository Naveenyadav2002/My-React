  


import AxiosComponent from "./component/axios/axios";
import ConditionalRender from "./component/conditional-render/render";
import MountingComponent from "./component/lifecycle/mountingPhase";
import LoadingSpinner from "./component/spinner/loading";
import Count from "./component/state/counter";
import Table from "./component/state/table";
import ProgressBar from "@ramonak/react-progress-bar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CircularIndeterminate from "./component/progressbar/circularbars";
import UpdatingComponent from "./component/lifecycle/updatingPhase";
import Parent from "./component/lifecycle/unmountingPhase";
import ParentComponent from "./component/purecomponents/parent";
import CircleComponent from "./component/circletask/circle";
import UseStateComponent1 from "./component/useState/useState1";
import UseStateComponent2 from "./component/useState/useState2";
import UseStateComponent3 from "./component/useState/useState3";
import UseStateComponent4 from "./component/useState/useState4";
import Uncontrolled from "./component/forms/uncontrolled";
import Controlled from "./component/forms/controlled";
import UseEffectEx1 from "./component/useEffect/useEffectEx1";
import UseEffectEx2 from "./component/useEffect/useEffectEx2";
import UseEffectEx3 from "./component/useEffect/useEfeectEx3";
import NavigationStack from "./navigation/navigation";
import UseReducer from "./component/useReducer/useReducer";





function App() {
  return (
    <>

{/* <UseEffectEx1/> */}
{/* 
<UseEffectEx3/> */}

{/* <UseEffectEx2/> */}
<NavigationStack/>
{/* <ParentComponent/> */}

</>
   
  );
}

export default App;