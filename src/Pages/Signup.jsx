import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import CreateLayout from '../Layout/CreateLayout';

const Signup = () => {
  return (
    <CreateLayout title='Signup NewsForge Hub'>
      <form className='my-10'>
        <Input
          displayName={'Name'}
          id={'name'}
          type={'text'}
          placeholder={'John Dou'}
        />
        <Input
          displayName={'Email Address'}
          id={'email'}
          type={'email'}
          placeholder={'example@yhaoo.com'}
        />
        <InputFile
          displayName={'Upload your photo'}
          id={'photoUrl'}
          name={'photoUrl'}
        />
        <Input
          displayName={'Password'}
          id={'password'}
          type={'password'}
          placeholder={'q|4T@a_uqp62@Qj'}
          isPassInput={true}
        />
        <Input
          displayName={'Confirm Password'}
          id={'confirmPassword'}
          type={'password'}
          placeholder={'q|4T@a_uqp62@Qj'}
          isPassInput={true}
        />
        <Button displayName={'Signup'} />
      </form>
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
