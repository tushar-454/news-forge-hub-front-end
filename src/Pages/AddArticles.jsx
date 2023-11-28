import Select from 'react-select';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import Container from '../Shared/Container';
import PageTitle from '../Shared/PageTitle';

import { useState } from 'react';
import toast from 'react-hot-toast';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import { imageUpload } from '../Api/utils';
import Button from '../Components/UI/Button';
import Tags from '../Data/Tags';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import usePublications from '../Hook/usePublications';

const AddArticles = () => {
  const [photoStatus, setPhotoStatus] = useState('Upload your photo');
  const [tags, setTags] = useState([]);
  const { publications, isLoading, isError } = usePublications();
  const axios = useAxios();
  const user = useAuth();
  const [isLoad, setIsLoad] = useState(false);

  //handle select change
  const handleSelectChange = (selected) => {
    const selectTags = selected.map((tag) => tag.value);
    setTags(selectTags);
  };

  //handle photo upload change
  const handleArticleImageUpload = (e) => {
    const imageName = e.target.files[0].name.slice(0, -4);
    setPhotoStatus(imageName);
  };

  // handle form submit
  const handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      setIsLoad(true);
      const form = e.target;
      const title = form.title.value;
      const imageFile = form.articleImage.files[0];
      const publication = form.publication.value;
      const description = form.description.value;
      if (
        !title ||
        !imageFile ||
        !publication ||
        !description ||
        tags.length === 0
      ) {
        return toast.error('Please fillup all input box.');
      }
      const image = await imageUpload(imageFile);

      if (
        !title ||
        !image ||
        !publication ||
        !description ||
        tags.length === 0
      ) {
        return toast.error('Please fillup all input box.');
      }
      const articleData = {
        title,
        image,
        publication,
        tags,
        description,
        email: user?.email,
      };
      const res = await axios.post('/articles/add-article', articleData);
      if (res.data.message) {
        toast.success('Article added successfully. Please wait for approve');
        form.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoad(false);
    }
  };
  return (
    <section>
      <PageTitle>Add Articles</PageTitle>
      <Container>
        <form
          className='w-full md:w-[768px] mx-auto my-10'
          onSubmit={handleAddArticle}
        >
          <Input
            displayName={'Title'}
            id={'title'}
            name={'title'}
            type={'text'}
            placeholder='The Future of Renewable Energy: Innovations and Challenges'
          />
          <InputFile
            displayName={photoStatus}
            id={'articleImage'}
            name={'articleImage'}
            onChange={handleArticleImageUpload}
          />
          <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
            {/* publication select  */}
            <div className='w-full md:w-1/2'>
              <label
                htmlFor='publication'
                className={`block text-xl font-semibold my-2`}
              >
                Publication
              </label>
              <select
                name='publication'
                id='publication'
                className='border p-4 rounded-lg outline-none w-full text-lg'
              >
                <option value=''>Choose your publication</option>
                {isError && (
                  <option value={''}>There was an error. Reload</option>
                )}
                {!isLoading &&
                  !isError &&
                  publications.map((publication, index) => (
                    <option key={index} value={publication.publicationName}>
                      {publication.publicationName}
                    </option>
                  ))}
              </select>
            </div>
            {/* react multiselect for tags  */}
            <div className='w-full md:w-1/2'>
              <label
                htmlFor='tags'
                className={`block text-xl font-semibold my-2`}
              >
                Tags
              </label>
              <Select
                isMulti
                name='colors'
                options={Tags}
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={handleSelectChange}
              />
            </div>
          </div>
          {/* description text area  */}
          <div>
            <label
              htmlFor='description'
              className={`block text-xl font-semibold my-2`}
            >
              Descriptions
            </label>
            <textarea
              name='description'
              id='description'
              className={`w-full outline-none border border-transparent bg-[#f9f9f9] text-[#747474] text-lg p-4 rounded-lg focus:border-[#c1c1c1] transition`}
              cols='30'
              rows='10'
              placeholder='In recent years, artificial intelligence (AI) has emerged as a transformative force in healthcare, revolutionizing the industry in profound ways. AI applications, powered by machine learning algorithms and data analytics'
            ></textarea>
          </div>
          <Button
            displayName={
              isLoad ? (
                <UseAnimations
                  animation={loading}
                  wrapperStyle={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                />
              ) : (
                'Add Articles'
              )
            }
          />
        </form>
      </Container>
    </section>
  );
};

export default AddArticles;
