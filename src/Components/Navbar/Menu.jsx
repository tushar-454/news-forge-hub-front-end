import { Link } from 'react-router-dom';
import { menuItems } from '../../Data/Data';

const Menu = () => {
  return (
    <div className='hidden 2xl:block'>
      <div className='flex justify-center items-center gap-3 h-full'>
        {menuItems.map((menuItem, index) => (
          <Link
            key={index}
            className='font-medium p-2 px-3 rounded-full hover:bg-white hover:text-[#981E4F] transition'
          >
            <span className='flex items-center gap-1'>
              {<menuItem.icon className='mb-1' />}
              {menuItem.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
