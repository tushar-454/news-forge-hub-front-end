import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import CreateLayout from '../Layout/CreateLayout';
import LoginWithOther from '../Shared/LoginWithOther';

const Login = () => {
  return (
    <CreateLayout title='Login NewsForge Hub'>
      <form className='my-10'>
        <Input
          displayName={'Email Address'}
          type={'email'}
          placeholder={'example@yhaoo.com'}
        />
        <Input
          displayName={'Password'}
          type={'password'}
          placeholder={'q|4T@a_uqp62@Qj'}
          isPassInput={true}
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
