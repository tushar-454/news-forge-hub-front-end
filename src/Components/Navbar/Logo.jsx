import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import logo from '../../assets/images/logo.png';

const Logo = ({ typeText = 'NFH' }) => {
  const [text] = useTypewriter({
    words: ['NewsForge', 'Hub', 'NFH', typeText],
    loop: 1,
  });
  return (
    <div className='flex justify-center items-center'>
      <Link to={'/'}>
        <img src={logo} alt='Logo' className='w-20' />
      </Link>
      <Link to={'/'}>
        <h1 className='text-6xl tracking-[-11px]'>{text}</h1>
      </Link>
    </div>
  );
};
Logo.propTypes = {
  typeText: PropTypes.string,
};
export default Logo;
