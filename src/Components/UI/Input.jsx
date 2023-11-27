import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';

const Input = ({ id, displayName, type, isPassInput, error, ...rest }) => {
  const [isPassHide, setIsPassHide] = useState(false);
  return (
    <div className={``}>
      <label htmlFor={id} className={`block text-xl font-semibold my-2`}>
        {displayName}
      </label>
      <div className={`relative`}>
        <input
          id={id}
          type={isPassHide ? 'text' : type}
          className={`w-full outline-none border border-transparent bg-[#f9f9f9] text-[#747474] text-lg p-4 rounded-lg focus:border-[#c1c1c1] transition ${
            isPassInput ? 'pr-10' : undefined
          }`}
          {...rest}
        />
        {isPassInput && (
          <p
            className={`absolute top-4 right-2`}
            onClick={() => setIsPassHide(!isPassHide)}
          >
            {isPassHide ? (
              <BiSolidHide className='text-3xl cursor-pointer text-[#747474]' />
            ) : (
              <BiSolidShow className='text-3xl cursor-pointer text-[#747474]' />
            )}
          </p>
        )}
      </div>
      {error && <p className={`my-2 text-red-500 transition`}>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  isPassInput: PropTypes.bool,
  displayName: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
};

export default Input;
