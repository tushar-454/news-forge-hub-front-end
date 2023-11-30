import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCloseOutline } from 'react-icons/io5';
import Select from 'react-select';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import { imageUpload } from '../Api/utils';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import InputFile from '../Components/UI/InputFile';
import Tags from '../Data/Tags';
import useAxios from '../Hook/useAxios';
import usePublications from '../Hook/usePublications';
import Container from '../Shared/Container';

const ArticlesUpdate = ({
  updateArticleId,
  modalCloseFunc,
  userArticleRefetch,
}) => {
  const [photoStatus, setPhotoStatus] = useState('Upload your photo');
  const [tags, setTags] = useState([]);
  const { publications, isLoading, isError } = usePublications();
  const axios = useAxios();
  const [isLoad, setIsLoad] = useState(false);

  // get one article for update
  const { data: updArticle, isLoading: updArtLoad } = useQuery({
    queryKey: ['updArticle'],
    queryFn: async () => {
      const res = await axios.get(`/articles/${updateArticleId}`);
      return res.data;
    },
  });

  const tagOption =
    !updArtLoad &&
    updArticle.tags.map((tag) => {
      const tags = { value: tag, label: tag };
      // const tagObj = { value: tag, label: tag };
      // tags.push(tagObj);
      return tags;
    });

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
  const handleUpdateArticle = async (e) => {
    e.preventDefault();
    try {
      setIsLoad(true);
      const form = e.target;
      const title = form.title.value;
      const imageFile = form.articleImage.files[0];
      const publication = form.publication.value;
      const description = form.description.value;

      const image = await imageUpload(imageFile);

      const articleData = {
        title,
        image,
        publication,
        tags,
        description,
        isApprove: 'Pending',
        isPremium: 'NONE',
        declinemsg: '',
      };
      const res = await axios.put(`/articles/${updateArticleId}`, articleData);
      if (res.data.message) {
        toast.success('Article updated successfully. Please wait for approve');
        form.reset();
        modalCloseFunc(false);
        userArticleRefetch();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <section className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-5 rounded-lg'>
      <Container>
        {!updArtLoad && (
          <form
            className='relative w-full md:w-[768px] mx-auto my-10'
            onSubmit={handleUpdateArticle}
          >
            <IoCloseOutline
              onClick={() => modalCloseFunc(false)}
              className='absolute -top-10 right-2 cursor-pointer text-3xl text-black hover:scale-125 active:scale-100 transition'
            />
            <Input
              displayName={'Title'}
              id={'title'}
              name={'title'}
              type={'text'}
              defaultValue={updArticle.title}
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
                  defaultValue={updArticle.publication}
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
                  defaultValue={tagOption}
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
                defaultValue={updArticle.description}
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
                  'Update Articles'
                )
              }
            />
          </form>
        )}
      </Container>
    </section>
  );
};
ArticlesUpdate.propTypes = {
  updateArticleId: PropTypes.string,
  modalCloseFunc: PropTypes.func,
  userArticleRefetch: PropTypes.func,
};
export default ArticlesUpdate;
