import { useEffect, useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import { Outlet } from 'react-router-dom';
import AdminMenuList from '../Components/Dashboard/AdminMenuList';
import UserMenuList from '../Components/Dashboard/UserMenuList';
import useAuth from '../Hook/useAuth';
import useUserInfo from '../Hook/useUserInfo';

const Dashboard = () => {
  const { user } = useAuth();
  const { userInfo, isLoading } = useUserInfo();
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
        className={`z-50 w-[374px] absolute xl:static border-r xl:border-none min-h-screen bg-white transition-all ${
          isCollapse ? 'translate-x-[-23.5rem]' : 'translate-x-0'
        }`}
      >
        <div className='block xl:hidden'>
          <div
            onClick={() => setIsCollapse(!isCollapse)}
            className={`absolute top-0 -right-16 w-16 h-16 bg-slate-300 rounded-r-full flex justify-center items-center cursor-pointer`}
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
          <button className='font-semibold text-md p-3 px-5 bg-[#5662BC] text-white rounded-full'>
            {!isLoading && userInfo.role}
          </button>
        </div>
        <hr />
        {/* show all action routes here */}
        {!isLoading && userInfo.role === 'USER' && <UserMenuList />}
        {!isLoading && userInfo.role === 'ADMIN' && <AdminMenuList />}
      </aside>
      <div className='w-full min-h-screen xl:h-auto xl:w-4/5 flex-grow bg-slate-100'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
