/* eslint-disable no-useless-escape */
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import useAuth from '../Hook/useAuth';
import CreateLayout from '../Layout/CreateLayout';
import LoginWithOther from '../Shared/LoginWithOther';

const loginInit = {
  email: '',
  password: '',
};
const errorInit = {
  email: '',
  password: '',
};

const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });
  const { loginWithEmailPass } = useAuth();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: '' }));
  };

  // handle form submit login user using email password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    {
      // email error check
      if (!email) {
        return setError((errorObj) => ({
          ...errorObj,
          email: 'Email is Require!',
        }));
      } else if (
        !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
          email
        )
      ) {
        return setError((errorObj) => ({
          ...errorObj,
          email: 'Enter your valid email!',
        }));
      }
      // password check
      if (!password) {
        return setError((prevError) => ({
          ...prevError,
          password: 'Password is required !',
        }));
      } else if (!/[A-Z]/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a capital letter',
        }));
      } else if (!/[a-z]/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a small letter',
        }));
      } else if (!/[^a-zA-Z0-9\s]/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a special Cherecter',
        }));
      } else if (!/\d+/.test(password)) {
        return setError((prevError) => ({
          ...prevError,
          password: 'must have a number',
        }));
      } else if (password.length < 6) {
        return setError((prevError) => ({
          ...prevError,
          password: 'password must 6 charecters',
        }));
      }
    }
    try {
      const res = await loginWithEmailPass(email, password);
      if (res.user) {
        toast.success('Account login succssfully.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <CreateLayout title='Login NewsForge Hub'>
      <form className='my-10' onSubmit={handleSubmit}>
        <Input
          displayName={'Email Address'}
          type={'email'}
          name={'email'}
          placeholder={'example@yhaoo.com'}
          value={login.email}
          onChange={handleInputChange}
          error={error.email}
        />
        <Input
          displayName={'Password'}
          type={'password'}
          name={'password'}
          placeholder={'q|4T@a_uqp62@Qj'}
          isPassInput={true}
          value={login.password}
          onChange={handleInputChange}
          error={error.password}
        />
        <Button displayName={'Login'} />
      </form>
      <LoginWithOther />
      <p className='font-medium text-center'>
        Don&apos;t Have account.{' '}
        <Link
          to={'/signup'}
          className='text-[#C31E4B] hover:underline underline-offset-4 transition'
        >
          Signup
        </Link>
      </p>
    </CreateLayout>
  );
};

export default Login;
