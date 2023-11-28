import toast from 'react-hot-toast';
import useUserArticles from '../Hook/useUserArticles';
import PageTitle from '../Shared/PageTitle';

const MyArticles = () => {
  const { userArticles, isLoading, isError } = useUserArticles();
  return (
    <div>
      <PageTitle>All Articles</PageTitle>
      {/* all article tables  */}
      <div className='overflow-auto'>
        <table border={'1'} className='w-full border-collapse'>
          <thead>
            <tr>
              <th className='p-2 bg-[#cbd5e1]'>No</th>
              <th className='p-2 bg-[#cbd5e1]'>Title</th>
              <th className='p-2 bg-[#cbd5e1]'>Descriptions</th>
              <th className='p-2 bg-[#cbd5e1]'>Status</th>
              <th className='p-2 bg-[#cbd5e1]'>Premium</th>
              <th className='p-2 bg-[#cbd5e1]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {isError && toast.error('There was an error.')}
            {!isLoading && userArticles.length === 0 && (
              <tr>
                <td colSpan={6} className='text-center'>
                  No article found
                </td>
              </tr>
            )}
            {!isLoading &&
              userArticles?.map((article, index) => (
                <tr key={index}>
                  <td className='p-2 bg-[#d7e2f0]'>Action</td>
                  <td className='p-2 bg-[#d7e2f0]'>Action</td>
                  <td className='p-2 bg-[#d7e2f0]'>Action</td>
                  <td className='p-2 bg-[#d7e2f0]'>Action</td>
                  <td className='p-2 bg-[#d7e2f0]'>Action</td>
                  <td className='p-2 bg-[#d7e2f0]'>Action</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArticles;
