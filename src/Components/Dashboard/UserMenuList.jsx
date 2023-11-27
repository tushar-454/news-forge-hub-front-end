import { NavLink } from 'react-router-dom';
import userMenus from '../../Data/UserMenu';

const UserMenuList = () => {
  return (
    <div className='flex flex-col gap-3'>
      {userMenus.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          className={`${(isActive) =>
            isActive
              ? 'active'
              : undefined} p-5 font-semibold text-lg hover:bg-slate-100 transition`}
        >
          {menu.menuName}
        </NavLink>
      ))}
    </div>
  );
};

export default UserMenuList;
