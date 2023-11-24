import { Link } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import useAuth from '../../Hook/useAuth';
import Menu from './Menu';
import User from './User';

const NavItem = () => {
  const { user, loading: isLoading } = useAuth();
  return (
    <>
      {!user ? (
        isLoading ? (
          <UseAnimations
            animation={loading}
            wrapperStyle={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        ) : (
          <div>
            <Link
              to={'/login'}
              className='bg-[#E45099] hover:bg-[#D23078] active:bg-[#B6205E] py-3 px-6 text-lg rounded-lg transition'
            >
              Login
            </Link>
          </div>
        )
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
