import { NavLink } from 'react-router-dom';
import { menuItems } from '../../Data/Data';

const Menu = () => {
  return (
    <div className='hidden 2xl:block'>
      <div className='flex justify-center items-center gap-1 h-full'>
        {menuItems.map((menuItem, index) => (
          <NavLink
            to={menuItem.path}
            key={index}
            className={`font-medium p-2 px-3 rounded-full hover:bg-white hover:text-[#981E4F] transition ${({
              isActive,
            }) => (isActive ? 'active' : undefined)}`}
          >
            <span className='flex items-center gap-1'>
              {<menuItem.icon className='text-xl mb-1' />}
              {menuItem.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
