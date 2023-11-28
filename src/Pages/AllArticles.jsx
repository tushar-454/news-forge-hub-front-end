import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import useArticles from '../Hook/useArticles';
import PageTitle from '../Shared/PageTitle';

const AllArticles = () => {
  const { allArticles, isLoading, isError } = useArticles();
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
              <th className='tableTh'>Action</th>
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
                  <td className='tableTd'>
                    <img
                      src={article.image}
                      className='w-12 h-12 rounded-full object-cover'
                    />
                  </td>
                  <td className='tableTd'>{article.title}</td>
                  <td className='tableTd'>{article.email}</td>
                  <td className='tableTd'>{article.publication}</td>
                  <td className='tableTd'>{article.isApprove}</td>
                  <td className='tableTd flex gap-1'>
                    <span
                      // onClick={() => handleDeletePublication(publication._id)}
                      className='bg-green-400 text-white px-4 py-2 rounded-full transition hover:bg-green-500 active:bg-green-600 cursor-pointer'
                    >
                      Approved
                    </span>
                    <span
                      // onClick={() => handleDeletePublication(publication._id)}
                      className='bg-orange-400 text-white px-4 py-2 rounded-full transition hover:bg-orange-500 active:bg-orange-600 cursor-pointer'
                    >
                      Decline
                    </span>
                    <span
                      // onClick={() => handleDeletePublication(publication._id)}
                      className='bg-red-400 text-white px-4 py-2 rounded-full transition hover:bg-red-500 active:bg-red-600 cursor-pointer'
                    >
                      Delete
                    </span>
                    <span
                      // onClick={() => handleDeletePublication(publication._id)}
                      className='bg-blue-400 text-white px-4 py-2 rounded-full transition hover:bg-blue-500 active:bg-blue-600 cursor-pointer'
                    >
                      Premium
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArticles;
