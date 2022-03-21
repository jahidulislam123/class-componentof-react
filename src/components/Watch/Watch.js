import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {

    const[steps,setSteps]=useState(0);
    const increaseStep =()=>{
        const newStepCount =steps+1;
        setSteps(newStepCount);

    }
    useEffect(()=>{
        console.log(steps);
    },[steps])
    return (
        <div style={{border:'3px solid purple'}} >
            <h2>This is my smart Watch  {steps} </h2>
            <button onClick={increaseStep} >De dowr mama</button>
            <Display name="jahidul  islam"steps={steps} ></Display>
        </div>
    );
};

export default Watch;