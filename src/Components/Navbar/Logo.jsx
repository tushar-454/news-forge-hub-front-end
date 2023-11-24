import { useTypewriter } from 'react-simple-typewriter';
import logo from '../../assets/images/logo.png';

const Logo = () => {
  const [text] = useTypewriter({
    words: ['NewsForge', 'Hub', 'NFH'],
    loop: 1,
  });
  return (
    <div className='flex justify-center items-center'>
      <img src={logo} alt='Logo' className='w-20' />
      <h1 className='text-6xl tracking-[-11px]'>{text}</h1>
    </div>
  );
};

export default Logo;
