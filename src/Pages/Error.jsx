import { Link } from 'react-router-dom';
import noRoute from '../assets/images/no-route.gif';
const Error = () => {
  return (
    <div className='w-screen my-20 grid justify-center items-center'>
      <img src={noRoute} alt='no Route' className='w-96' />
      <Link
        to={'/'}
        className='p-5 bg-[#C12664] hover:bg-[#CF3376] active:bg-[#C12664] text-white text-center rounded-lg transition'
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
