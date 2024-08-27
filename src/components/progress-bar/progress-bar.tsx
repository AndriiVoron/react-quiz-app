import { FC } from "react";

interface ProgressBarProps {
  currentProggres?: number;
  totalProggres?: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({currentProggres = 1, totalProggres = 10}) => {
  const percentage = 100 / totalProggres * currentProggres;

  return (
    <div className="w-full bg-[#f2f3f4] rounded-full h-2.5">
      <div className='bg-[#ceb9ff] h-2.5 rounded-full' style={{width: `${percentage}%`}} ></div>
    </div>    
  );
}