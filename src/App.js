

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




function App() {
  return (
    <>
   
   {/* <AxiosComponent/> */}
   <MountingComponent message="Welcome"/>
{/* <ProgressBar/>
<div style={{ width: 100, height: 100 , lineHeight:20}}>
  <CircularProgressbar value={80} text={`${80}%`}/>
</div> */}


   </>
  );
}

export default App;
