

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




function App() {
  return (
    <>
{/* <MountingComponent/> */}
<UpdatingComponent messages="welcome"/>
<h1>-----------------------</h1>
<Parent/>
{/* <ParentComponent/>
<CircleComponent/> */}

</>
   
  );
}

export default App;
