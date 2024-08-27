import React from 'react';
import { QuizeHead } from './components/quize-head';

export function QuizePage() {
  return (
    <div className='card-component w-600 h-400'>
     <QuizeHead />
     <hr />
     Progres Bar
     <hr />
     Question
    </div>
  );
}
