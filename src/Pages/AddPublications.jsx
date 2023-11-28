import { useState } from 'react';
import toast from 'react-hot-toast';
import { imageUpload } from '../Api/utils';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import useAxios from '../Hook/useAxios';
import PageTitle from '../Shared/PageTitle';

const AddPublications = () => {
  const axios = useAxios();
  const [photoStatus, setPhotoStatus] = useState(
    'Upload your Publication Logo'
  );
  //handle photo upload change
  const handleImageUpload = (e) => {
    const imageName = e.target.files[0].name.slice(0, -4);
    setPhotoStatus(imageName);
  };

  const handleAddPublicaton = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imageFile = form.publicationImg.files[0];
    if (!name || !imageFile || !email) {
      return toast.error('Please fillup all input box.');
    }
    const image = await imageUpload(imageFile);

    if (!name || !image || !email) {
      return toast.error('Please fillup all input box.');
    }
    const publicationInfo = {
      publicationEmail: email,
      publicationName: name,
      publicationLogo: image,
    };
    const res = await axios.post(`admin/addPublication`, publicationInfo);
    if (res.data.error) {
      return toast.error('Publications Already exists.');
    }
    if (res.status === 200) {
      toast.success('Successfully Added');
      form.reset();
      setPhotoStatus('Upload your Publication Logo');
    } else {
      toast.error('There was an error.');
    }
  };

  return (
    <div>
      <PageTitle>Add Publication</PageTitle>
      <div className='flex justify-center items-center my-10'>
        <form
          className='w-full md:w-[768px] p-10 border rounded-lg space-y-10'
          onSubmit={handleAddPublicaton}
        >
          <Input
            displayName={'Publication Name'}
            placeholder={'Mindfulness Matters'}
            id={'publication'}
            name={'name'}
            type={'text'}
          />
          <Input
            displayName={'Publication Email'}
            placeholder={'mindfulness@matters.com'}
            id={'email'}
            name={'email'}
            type={'email'}
          />
          <InputFile
            displayName={photoStatus}
            onChange={handleImageUpload}
            id={'publicatonImg'}
            name={'publicationImg'}
          />
          <Button displayName={'Add Publication'} />
        </form>
      </div>
    </div>
  );
};

export default AddPublications;
