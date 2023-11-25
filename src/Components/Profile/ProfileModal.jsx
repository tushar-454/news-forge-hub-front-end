import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCloseOutline } from 'react-icons/io5';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import { imageUpload } from '../../Api/utils';
import useAuth from '../../Hook/useAuth';
import Button from '../UI/Button';
import Input from '../UI/Input';
import InputFile from '../UI/InputFile';

const ProfileModal = ({ closeFunc }) => {
  const [photoStatus, setPhotoStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, updateUserProfile } = useAuth();

  // handle photo upload change
  const photoUpload = (e) => {
    const imageName = e.target.files[0].name.slice(0, -4);
    setPhotoStatus(imageName);
  };

  // handle update profile
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    try {
      setIsLoading(true);
      if (photoStatus) {
        const imageData = await imageUpload(e.target.photoUrl.files[0]);
        await updateUserProfile(name, imageData?.data?.display_url);
        toast.success('Profile update successfully.');
        closeFunc(false);
      } else {
        await updateUserProfile(name, user?.photoURL);
        toast.success('Profile update successfully.');
        closeFunc(false);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full md:w-[768px] p-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-outerShadow visible opacity-1 popupModal'>
      <IoCloseOutline
        onClick={() => closeFunc(false)}
        className='absolute top-2 right-2 cursor-pointer text-3xl text-black hover:scale-125 active:scale-100 transition'
      />
      <h1 className='text-3xl text-center'>Update your profile</h1>
      <form onSubmit={handleUpdate}>
        <Input
          displayName={'Name'}
          id={'name'}
          name={'name'}
          type={'text'}
          placeholder={'John Dou'}
          defaultValue={user?.displayName}
        />
        <InputFile
          displayName={photoStatus ? photoStatus : 'Upload your photo'}
          id={'photoUrl'}
          name={'photoUrl'}
          onChange={photoUpload}
        />
        <Button
          displayName={
            isLoading ? (
              <UseAnimations
                animation={loading}
                wrapperStyle={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            ) : (
              'Update'
            )
          }
        />
      </form>
    </div>
  );
};
ProfileModal.propTypes = {
  closeFunc: PropTypes.func,
};
export default ProfileModal;
