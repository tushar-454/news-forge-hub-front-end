import { useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { IoCloseOutline } from 'react-icons/io5';
import swal from 'sweetalert';
import Button from '../Components/UI/Button';
import useArticles from '../Hook/useArticles';
import useAxios from '../Hook/useAxios';
import PageTitle from '../Shared/PageTitle';

const AllArticles = () => {
  const [modal, setModal] = useState(false);
  const [aricleId, setArticleId] = useState('');
  const { allArticles, isLoading, isError, refetch } = useArticles();
  const axios = useAxios();

  // handle decline submit
  const handleDeclineSubmit = async (e) => {
    e.preventDefault();
    const declineMsg = e.target.decline.value;
    const res = await axios.patch(`/admin/articles/${aricleId}`, {
      isApprove: 'Decline',
      declinemsg: declineMsg,
    });
    if (res.data.error) {
      return toast.error(res.data.error);
    }
    toast.success(res.data.message);
    setModal(false);
    e.target.reset();
    refetch();
  };
  //handle article approved
  const handleArticleApproved = async (e, id) => {
    try {
      if (e.target.value === 'Decline') {
        setModal(true);
        setArticleId(id);
        return;
      }
      const res = await axios.patch(`/admin/articles/${id}`, {
        isApprove: e.target.value,
      });
      if (res.data.error) {
        return toast.error(res.data.error);
      }
      toast.success(res.data.message);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  // handle article approved,pending,decline
  const handleArticlePremium = async (e, id) => {
    try {
      // premium aricle approve code
      const res = await axios.patch(`/admin/articles/${id}`, {
        isPremium: e.target.value,
      });
      if (res.data.error) {
        return toast.error(res.data.error);
      }
      toast.success(res.data.message);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

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
        <title>All Articles | NewsForge Hub</title>
      </Helmet>
      <PageTitle>All Articles</PageTitle>
      {/* all article tables  */}
      <div className='overflow-auto'>
        <table border={'1'} className='w-full border'>
          <thead>
            <tr className='bg-[#e3efff]'>
              <th className='tableTh'>No</th>
              <th className='tableTh'>Author Info</th>
              <th className='tableTh'>Title</th>
              <th className='tableTh'>Posted Date</th>
              <th className='tableTh'>Publisher</th>
              <th className='tableTh'>Status</th>
              <th className='tableTh'>Approved Status</th>
              <th className='tableTh'>Premium Status</th>
              <th className='tableTh'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isError && toast.error('There was an error.')}
            {!isLoading && allArticles.length === 0 && (
              <tr>
                <td colSpan={6} className='text-center'>
                  No Publication found
                </td>
              </tr>
            )}
            {!isLoading &&
              allArticles?.map((article, index) => (
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
                  <td className='tableTd whitespace-nowrap'>{article.title}</td>
                  <td className='tableTd'>{article.email}</td>
                  <td className='tableTd whitespace-nowrap'>
                    {article.publication}
                  </td>
                  <td className='tableTd'>{article.isApprove}</td>
                  <td className='tableTd'>
                    <select
                      defaultValue={article.isApprove}
                      className='outline-none bg-none bg-transparent border-none w-[130px] cursor-pointer '
                      onChange={(e) => handleArticleApproved(e, article._id)}
                    >
                      <option value='Decline'>Decline</option>
                      <option value='Pending'>Pending</option>
                      <option value='Approved'>Approved</option>
                    </select>
                  </td>
                  <td className='tableTd'>
                    <select
                      defaultValue={article.isPremium}
                      className='outline-none bg-none bg-transparent border-none w-[130px] cursor-pointer '
                      onChange={(e) => handleArticlePremium(e, article._id)}
                    >
                      <option value='NONE'>None</option>
                      <option value='Approved'>Approved</option>
                    </select>
                  </td>
                  <td className='tableTd'>
                    <span
                      onClick={() => handleArticleDelete(article._id)}
                      className='bg-red-400 text-sm text-white px-4 py-2 rounded-full transition hover:bg-red-500 active:bg-red-600 cursor-pointer'
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* mesage modal  */}
      {modal && (
        <div
          className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white w-[420px] bg-slate-200 p-10 rounded-lg popup`}
        >
          <IoCloseOutline
            onClick={() => setModal(false)}
            className='absolute top-2 right-2 cursor-pointer text-3xl text-black hover:scale-125 active:scale-100 transition'
          />
          <h1 className='text-black font-semibold text-3xl my-3 text-center'>
            Write decline message
          </h1>
          <div>
            <form onSubmit={(e) => handleDeclineSubmit(e)}>
              <textarea
                name='decline'
                id='decline'
                className={`w-full outline-none border border-transparent bg-[#f9f9f9] text-[#747474] text-lg p-4 rounded-lg focus:border-[#c1c1c1] transition`}
                cols='10'
                rows='5'
                placeholder='what happen'
              ></textarea>
              <Button
                type={'submit'}
                displayName={'Decline and send message'}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllArticles;
