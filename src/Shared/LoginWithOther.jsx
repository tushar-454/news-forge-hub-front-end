import toast from 'react-hot-toast';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';

const LoginWithOther = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axios = useAxios();

  const handleGoogleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      if (res) {
        const tokenPayload = {
          email: res?.user?.email,
          role: 'USER',
          isPremium: false,
          premiumTill: 0,
        };
        axios.post('/jwt/token', tokenPayload);
        axios.post('/users', {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
        });
        toast.success('Login successfully');
        navigate(state || '/');
      }
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
