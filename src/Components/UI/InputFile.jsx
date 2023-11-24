import PropTypes from 'prop-types';
const InputFile = ({ id, displayName, photoStatus, error, ...rest }) => {
  return (
    <>
      <div className={`block w-full my-5`}>
        <label
          htmlFor={id}
          className={`block text-center border-4 border-dashed border-[#c0c0c0] outline-none text-[#747474] bg-[#F1F1F1] text-lg p-4 rounded-lg cursor-pointer hover:border-[#c1c1c1] transition`}
        >
          {displayName}
        </label>
        <input
          type='file'
          id={id}
          accept='.png,.jpg'
          className={`hidden`}
          {...rest}
        />
        <p className={`text-center`}>{photoStatus}</p>
      </div>
      {error && <p className={`mt-2 text-red-500`}>{error}</p>}
    </>
  );
};
InputFile.propTypes = {
  id: PropTypes.string,
  displayName: PropTypes.string,
  photoStatus: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
};
export default InputFile;
