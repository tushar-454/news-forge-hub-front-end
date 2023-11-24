import toast from 'react-hot-toast';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../Hook/useAuth';

const LoginWithOther = () => {
  const { loginWithGoogle } = useAuth();
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success('Login successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className='flex justify-center items-center gap-4'>
      <button onClick={handleGoogleLogin}>
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
