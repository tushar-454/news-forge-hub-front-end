import PropTypes from 'prop-types';
import Logo from '../Components/Navbar/Logo';

const CreateLayout = ({ title, children }) => {
  return (
    <section>
      {/* login wrapper  */}
      <div className='w-full h-screen grid justify-center items-center'>
        <div className='w-full sm:w-[640px] border border-[#E6E6E6] p-12 rounded-lg'>
          <div className='flex flex-col items-center'>
            <Logo typeText={'NewsForge'} />
            <h1 className='text-2xl'>{title}</h1>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};
CreateLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default CreateLayout;
