import './App.css';
import {useEffect} from "react";
import {useState} from "react";

const ProgressBar=({progress})=>{
    const [animatedProgress,setAnimatedProgress]=useState(0);
    useEffect(()=>{
        setTimeout(()=>setAnimatedProgress(progress),100)
    },[progress]);
    return(
        <div className={'outer-container'}>
            <div className={'inner-container'}
                 style={
                     {transform:`translateX(-${100-animatedProgress}%)`}
                 }
                 role={'progressbar'}
                 aria-valuenow={progress}
                 aria-valuemin="0"
                 aria-valuemax="100"
            >
                {progress}%
            </div>
        </div>
    )
}

function App() {

  const values=[5,30,50,75,100]
  return (
    <div className="App">
        <h1>Progress Bar</h1>
        {
            values.map((value,index)=>(
                <ProgressBar key={index} progress={value}/>
            ))
        }
    </div>
  );
}

export default App;
