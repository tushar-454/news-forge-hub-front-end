import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginWithOther = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <button>
        <FcGoogle className='social-icon' />
      </button>
      <button>
        <FaFacebook className='social-icon' />
      </button>
      <button>
        <AiFillTwitterCircle className='social-icon' />
      </button>
    </div>
  );
};

export default LoginWithOther;
