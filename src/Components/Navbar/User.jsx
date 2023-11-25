import { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { RxDropdownMenu } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import { menuItems } from '../../Data/Data';
import useAuth from '../../Hook/useAuth';

const User = () => {
  const [isUserDropdown, setIsUserDropDown] = useState(false);
  const { user, logOutAccount } = useAuth();

  useEffect(() => {
    window.addEventListener('resize', () => setIsUserDropDown(false));
  }, []);
  return (
    <div>
      {/* user image  */}
      <div className='h-full relative flex justify-center items-center gap-2'>
        <Link to={'/profile'}>
          <img
            src={user?.photoURL}
            className='w-14 cursor-pointer rounded-full hover:ring-4 ring-[#FEF2F4] transition'
          />
        </Link>
        <AiOutlineLogout
          onClick={logOutAccount}
          className={`hidden 2xl:block text-5xl cursor-pointer relative hover:left-1 transition`}
        />
        <RxDropdownMenu
          className={`block 2xl:hidden text-6xl cursor-pointer ${
            isUserDropdown ? 'rotate-180' : 'rotate-0'
          } transition-all`}
          onClick={() => setIsUserDropDown(!isUserDropdown)}
        />
        {/* mobile responsive menu Item  */}
        <div
          className={`z-50 absolute right-0 top-18 py-2 rounded-b-lg transform-custom ${
            isUserDropdown ? 'transform-undo' : undefined
          } transition-all 2xl:hidden w-52 bg-[#e6aadaa3] text-black backdrop-blur`}
        >
          <div className='flex flex-col items-end h-full'>
            {menuItems.map((menuItem, index) => (
              <NavLink
                to={menuItem.path}
                onClick={() => setIsUserDropDown(false)}
                key={index}
                className={`font-medium p-2 px-3 rounded-full hover:bg-white hover:text-[#981E4F] transition ${(
                  isActive
                ) => (isActive ? 'active' : undefined)}`}
              >
                <span className='flex items-center gap-1'>
                  {<menuItem.icon className='mb-1' />}
                  {menuItem.name}
                </span>
              </NavLink>
            ))}
            <Link
              onClick={logOutAccount}
              className='font-medium p-2 px-3 rounded-full hover:bg-white hover:text-[#981E4F] transition'
            >
              <span className='flex items-center gap-1'>
                <AiOutlineLogout className='mb-1' />
                Logout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
