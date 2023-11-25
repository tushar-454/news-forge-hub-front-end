import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';

const SubscribeModal = ({ closeFunc }) => {
  return (
    <div className='w-full h-full fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex justify-center items-center z-50 backdrop-brightness-50'>
      <div
        className={`text-white w-[420px] bg-slate-200 p-10 rounded-lg relative popup`}
      >
        <IoCloseOutline
          onClick={() => closeFunc(false)}
          className='absolute top-2 right-2 cursor-pointer text-3xl text-black hover:scale-125 active:scale-100 transition'
        />
        <h1 className='text-black font-semibold text-3xl text-center'>
          Subscribe our premium plan for tranding premium articals
        </h1>
        <div>
          <Input placeholder={'enter your email'} id={'eamil'} />
          <Link
            to={'/subscription'}
            className='bg-blue-500 text-white text-lg px-3 py-2 block mt-5 text-center rounded-lg hover:bg-blue-600 active:bg-blue-700 transition'
          >
            Go to
          </Link>
        </div>
      </div>
    </div>
  );
};

SubscribeModal.propTypes = {
  closeFunc: PropTypes.func,
};

export default SubscribeModal;
