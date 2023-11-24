import Container from '../../Shared/Container';
import Logo from './Logo';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <section className='bg-[#981E4F]'>
      <Container>
        {/* navbar wrapper */}
        <div className='flex justify-between items-center gap-4 h-20 text-white'>
          <Logo />
          {/* nav menu wrpper  */}
          <NavItem />
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
