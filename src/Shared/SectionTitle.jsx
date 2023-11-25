import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => {
  return (
    <div>
      <h1 className='text-4xl text-center my-10 font-bold underline underline-offset-4'>
        {children}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node,
};

export default SectionTitle;
