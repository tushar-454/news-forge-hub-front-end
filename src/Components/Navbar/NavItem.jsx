import Menu from './Menu';
import User from './User';

const NavItem = () => {
  return (
    <div className='flex justify-center items-center gap-4 h-full'>
      <Menu />
      <User />
    </div>
  );
};

export default NavItem;
