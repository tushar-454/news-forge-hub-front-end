import { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { menuItems } from '../../Data/Data';

const User = () => {
  const [isUserDropdown, setIsUserDropDown] = useState(false);
  return (
    <div>
      {/* user image  */}
      <div className='h-full relative'>
        <img
          onClick={() => setIsUserDropDown(!isUserDropdown)}
          src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png'
          className='w-16 cursor-pointer'
        />
        {/* mobile responsive menu Item  */}
        <div
          className={`absolute right-0 top-18 py-2 rounded-b-lg transform-custom ${
            isUserDropdown ? 'transform-undo' : undefined
          } transition-all 2xl:hidden w-52 bg-[#981e4f1a] text-black`}
        >
          <div className='flex flex-col items-end h-full'>
            {menuItems.map((menuItem, index) => (
              <Link
                onClick={() => setIsUserDropDown(false)}
                key={index}
                className='font-medium p-2 px-3 rounded-full hover:bg-white hover:text-[#981E4F] transition'
              >
                <span className='flex items-center gap-1'>
                  {<menuItem.icon className='mb-1' />}
                  {menuItem.name}
                </span>
              </Link>
            ))}
            <Link className='font-medium p-2 px-3 rounded-full hover:bg-white hover:text-[#981E4F] transition'>
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
