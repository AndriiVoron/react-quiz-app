import { FC } from "react";
import WestIcon from '@mui/icons-material/West';

interface QuizeHeadProps {
  handleClick: () => void;
  isDisable?: boolean;
}

export const ButtonBack: FC<QuizeHeadProps> = ({isDisable = false, handleClick}) => {
  return (
    <button onClick={handleClick} disabled={isDisable} className='btn btn-white text-xs disabled:btn-disabled'>
      <WestIcon sx={{ fontSize: '0.75rem', height: '10px' }} />
      <span>Back</span>
    </button>
  );
}
