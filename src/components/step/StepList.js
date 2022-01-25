import React, {useEffect, useState} from 'react';
import { getAllSteps } from '../../modules/StepsManager';
import { StepCard } from './StepCard';

export const StepList = () => {
    const [steps, setSteps] = useState([]);

    const getSteps = () => {
        getAllSteps().then(stepsFromAPI => {
            setSteps(stepsFromAPI);
        })
    }

    useEffect(() => {
        getSteps();
    }, []);

    return(
        <>
        <div className="section__steps">
            {steps.map(step => <StepCard key={step.id} step={step} />)}
        </div>
        </>
    )
}