import { Link } from 'react-router-dom';
import Menu from './Menu';
import User from './User';

const NavItem = () => {
  const user = false;
  return (
    <>
      {!user ? (
        <div>
          <Link
            to={'/login'}
            className='bg-[#E45099] hover:bg-[#D23078] active:bg-[#B6205E] py-3 px-6 text-lg rounded-lg transition'
          >
            Login
          </Link>
        </div>
      ) : (
        <div className='flex justify-center items-center gap-4 h-full'>
          <Menu />
          <User />
        </div>
      )}
    </>
  );
};

export default NavItem;
