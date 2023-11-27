import { useEffect, useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Outlet } from 'react-router-dom';
import UserMenuList from '../Components/Dashboard/UserMenuList';
import useAuth from '../Hook/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.screen.width < 1280) {
        setIsCollapse(true);
      } else {
        setIsCollapse(false);
      }
    });
  }, []);

  return (
    <div className='flex relative'>
      <aside
        className={`w-[374px] absolute xl:static border-r xl:border-none min-h-screen bg-white transition-all ${
          isCollapse ? 'translate-x-[-23.5rem]' : 'translate-x-0'
        }`}
      >
        <div className='block xl:hidden'>
          <div
            onClick={() => setIsCollapse(!isCollapse)}
            className={`absolute top-0 -right-16 w-16 h-16 bg-slate-300 rounded-r-full flex justify-center items-center`}
          >
            <SlArrowRight
              className={`text-4xl ${
                isCollapse ? 'rotate-0' : 'rotate-180'
              } transition-all`}
            />
          </div>
        </div>
        {/* show some user info */}
        <div className='flex flex-col items-center my-5'>
          <img
            src={user?.photoURL}
            className='w-20 h-20 object-cover rounded-full'
          />
          <h1 className='text-2xl font-medium my-3'>{user?.displayName}</h1>
        </div>
        {/* show all action routes here */}
        <UserMenuList />
      </aside>
      <div className='w-full xl:w-4/5 bg-slate-100 pt-20'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
