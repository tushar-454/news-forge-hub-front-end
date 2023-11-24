/* eslint-disable no-useless-escape */
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import useAuth from '../Hook/useAuth';
import CreateLayout from '../Layout/CreateLayout';
import LoginWithOther from '../Shared/LoginWithOther';

const signupInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
};
const errorInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const [signup, setSignup] = useState({ ...signupInit });
  const [error, setError] = useState({ ...errorInit });
  const { signupWithEmailPassword } = useAuth();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: '' }));
  };

  // handle form submit create user using email password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password, confirmPassword } = signup;
    {
      // name error check
      if (!name) {
        return setError((errorObj) => ({
          ...errorObj,
          name: 'Name is Require!',
        }));
      } else if (name.length < 3) {
        return setError((errorObj) => ({
          ...errorObj,
          name: 'Name Must be 3 Charecters!',
        }));
      }
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
      // check confirm password
      if (password !== confirmPassword) {
        setError((prevError) => ({
          ...prevError,
          confirmPassword: 'Password not matched !',
        }));
        return;
      }
    }
    try {
      const res = await signupWithEmailPassword(email, password);
      if (res.user) {
        toast.success('Account create successfully.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <CreateLayout title='Signup NewsForge Hub'>
      <form className='my-10' onSubmit={handleSubmit}>
        <Input
          displayName={'Name'}
          id={'name'}
          name={'name'}
          type={'text'}
          placeholder={'John Dou'}
          value={signup.name}
          onChange={handleInputChange}
          error={error.name}
        />
        <Input
          displayName={'Email Address'}
          id={'email'}
          name={'email'}
          type={'email'}
          placeholder={'example@yhaoo.com'}
          value={signup.email}
          onChange={handleInputChange}
          error={error.email}
        />
        <InputFile
          displayName={'Upload your photo'}
          id={'photoUrl'}
          name={'photoUrl'}
        />
        <Input
          displayName={'Password'}
          id={'password'}
          name={'password'}
          type={'password'}
          placeholder={'q|4T@a_uqp62@Qj'}
          isPassInput={true}
          value={signup.password}
          onChange={handleInputChange}
          error={error.password}
        />
        <Input
          displayName={'Confirm Password'}
          id={'confirmPassword'}
          name={'confirmPassword'}
          type={'password'}
          placeholder={'q|4T@a_uqp62@Qj'}
          isPassInput={true}
          value={signup.confirmPassword}
          onChange={handleInputChange}
          error={error.confirmPassword}
        />
        <Button displayName={'Signup'} />
      </form>
      <LoginWithOther />
      <p className='font-medium text-center'>
        Already Have an account.
        <Link
          to={'/login'}
          className='text-[#C31E4B] hover:underline underline-offset-4 transition'
        >
          Login
        </Link>
      </p>
    </CreateLayout>
  );
};

export default Signup;
