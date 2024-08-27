import { FC } from "react";
import { ButtonBack } from '../../../common-components/button-back'

interface QuizeHeadProps {
  handleBack: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const QuizeHead: FC<QuizeHeadProps> = ({handleBack, currentStep = 1, totalSteps = 10}) => {
  return (
    <div className='card-header'>
      <ButtonBack handleClick={handleBack} isDisable={currentStep <= 1 ? true : false}/>
      <h1 className='text-base tracking-widest text-[#747474]'>GOALS</h1>
      <span className='text-xs'>{currentStep}/{totalSteps}</span>
    </div>
  );
}

