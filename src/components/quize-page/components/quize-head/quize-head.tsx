import { FC } from "react";
import { ButtonBack } from '../../../common-components/button-back'

interface QuizeHeadProps {
  currentPage?: number;
  totalPages?: number;
}

export const QuizeHead: FC<QuizeHeadProps> = ({currentPage = 1, totalPages = 10}) => {
  return (
    <div className='card-header'>
      <ButtonBack />
      <h1 className='text-base tracking-widest text-[#747474]'>GOALS</h1>
      <span className='text-xs'>{currentPage}/{totalPages}</span>
    </div>
  );
}

