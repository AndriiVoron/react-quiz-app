import WestIcon from '@mui/icons-material/West';

export function ButtonBack() {
  return (
    <button className='btn btn-white text-xs'>
      <WestIcon sx={{ fontSize: '0.75rem', height: '10px' }} />
      <span>Back</span>
    </button>
  );
}
