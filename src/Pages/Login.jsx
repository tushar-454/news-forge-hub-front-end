import { Link } from 'react-router-dom';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import CreateLayout from '../Layout/CreateLayout';

const Login = () => {
  return (
    <CreateLayout title='Sign into NewsForge Hub'>
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
      <p className='text-center'>
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
