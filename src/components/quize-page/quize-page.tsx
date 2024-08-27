import React, { useEffect } from 'react';
import { questions } from '../../api';
import { ProgressBar } from '../progress-bar';
import { useQuizeState } from '../quize-state';
import { ACTION_TYPE } from '../quize-state/constants';
import { QuizeHead } from './components/quize-head';

export function QuizePage() {
  const {state, dispatch } = useQuizeState();

  useEffect(() => {
    dispatch({
      type:ACTION_TYPE.SET_QUIZE,
      payload: { 
        currentStep: 1,
        totalSteps: questions.length,
        questions,
      }
    })
  }, []);

  console.log('state :: ', state);

  const handleBack = () => {
    console.log('make one step');
  };
  
  return (
    <div className='card-component w-600 h-400'>
      <QuizeHead 
        handleBack={handleBack}
        currentStep={state.currentStep}
        totalSteps={state.totalSteps}
      />
      <div className='mb-5'>
        <ProgressBar />
      </div>
      Here will place question factory 
    </div>
  );
}
