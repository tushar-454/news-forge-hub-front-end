import PropTypes from 'prop-types';

const Button = ({ displayName, ...rest }) => {
  return (
    <button
      {...rest}
      className={`block w-full border border-[#B21E4B] outline-none py-3 px-4 my-6 text-xl font-semibold text-[#C31E4B] bg-white rounded-lg cursor-pointer hover:bg-[#FEF2F4] active:bg-[#FDE6E9] transition`}
    >
      {displayName}
    </button>
  );
};

Button.propTypes = {
  displayName: PropTypes.any,
};

export default Button;
