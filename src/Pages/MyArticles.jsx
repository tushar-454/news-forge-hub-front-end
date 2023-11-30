import { useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { TbMessageX } from 'react-icons/tb';
import swal from 'sweetalert';
import useAxios from '../Hook/useAxios';
import useUserArticles from '../Hook/useUserArticles';
import Container from '../Shared/Container';
import PageTitle from '../Shared/PageTitle';
import ArticlesUpdate from './ArticlesUpdate';

const MyArticles = () => {
  const { userArticles, isLoading, isError, refetch } = useUserArticles();
  const [declineMsgShow, setDeclineMsgShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [updateArticleId, setUpdateArticleId] = useState('');
  const axios = useAxios();

  //handle article delete function
  const handleArticleDelete = async (id) => {
    swal({
      title: 'Are you sure to delete?',
      text: 'Thing again one time.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await axios.delete(`/admin/deleteArticle/${id}`);
          if (res.data.error) {
            return swal(res.data.error, {
              icon: 'error',
            });
          }
          if (res.data.message) {
            refetch();
            return swal(res.data.message, {
              icon: 'success',
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        swal('You changed your mind.');
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Articles | NewsForge Hub</title>
      </Helmet>
      <PageTitle>My Articles</PageTitle>
      <Container>
        {/* all article div grid  */}

        <div className='overflow-auto'>
          <table border={'1'} className='w-full border'>
            <thead>
              <tr className='bg-[#e3efff]'>
                <th className='tableTh'>No</th>
                <th className='tableTh'>Author Info</th>
                <th className='tableTh'>Title</th>
                <th className='tableTh'>Email</th>
                <th className='tableTh whitespace-nowrap'>Posted Date</th>
                <th className='tableTh'>Publication</th>
                <th className='tableTh'>Status</th>
                <th className='tableTh whitespace-nowrap'>Premium Status</th>
                <th className='tableTh'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isError && toast.error('There was an error.')}
              {!isLoading && userArticles.length === 0 && (
                <tr>
                  <td colSpan={9} className='text-center'>
                    No Articles found
                  </td>
                </tr>
              )}
              {!isLoading &&
                userArticles?.map((article, index) => (
                  <tr key={index} className='bg-[#ecf4ff]'>
                    <td className='tableTd'>{++index}</td>
                    <td className='tableTd flex gap-3 items-center'>
                      <p className='w-12'>
                        <img
                          src={article.photo}
                          className='w-12 h-12 rounded-full object-cover'
                        />
                      </p>
                      <p>
                        <span className='block'>{article.name}</span>
                        <span>{article.email}</span>
                      </p>
                    </td>
                    <td className='tableTd whitespace-nowrap'>
                      {article.title.slice(0, 30)}...
                    </td>
                    <td className='tableTd'>{article.email}</td>
                    <td className='tableTd'>
                      {new Date(article.date).toLocaleDateString()}
                    </td>
                    <td className='tableTd whitespace-nowrap'>
                      {article.publication}
                    </td>
                    <td className='tableTd'>
                      {article.isApprove}
                      <span className='cursor-pointer'>
                        {article.declinemsg && (
                          <TbMessageX
                            onClick={() => setDeclineMsgShow(!declineMsgShow)}
                          />
                        )}
                      </span>
                      {declineMsgShow && article.declinemsg && (
                        <p className='absolute top-40 right-96 bg-white p-3 z-50'>
                          {article.declinemsg}
                        </p>
                      )}
                    </td>
                    <td className='tableTd'>{article.isPremium}</td>
                    <td className='tableTd'>
                      <span
                        onClick={() => handleArticleDelete(article._id)}
                        className='bg-red-400 text-sm text-white px-4 py-2 rounded-full transition hover:bg-red-500 active:bg-red-600 cursor-pointer mr-1'
                      >
                        Delete
                      </span>
                      <span
                        onClick={() => {
                          setUpdateModalShow(!updateModalShow);
                          setUpdateArticleId(article._id);
                        }}
                        className='bg-blue-400 text-sm text-white px-4 py-2 rounded-full transition hover:bg-blue-500 active:bg-blue-600 cursor-pointer'
                      >
                        Update
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {updateModalShow && (
            <ArticlesUpdate
              updateArticleId={updateArticleId}
              modalCloseFunc={setUpdateModalShow}
              userArticleRefetch={refetch}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default MyArticles;
