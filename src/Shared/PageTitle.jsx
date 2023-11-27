import PropTypes from 'prop-types';

const PageTitle = ({ children }) => {
  return (
    <div className='w-full h-40 flex justify-center items-center bg-[#F0FDCD]'>
      <h1 className='text-5xl font-semibold'>{children}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
