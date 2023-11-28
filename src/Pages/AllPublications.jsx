import { useState } from 'react';
import toast from 'react-hot-toast';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import swal from 'sweetalert';
import useAxios from '../Hook/useAxios';
import usePublications from '../Hook/usePublications';
import PageTitle from '../Shared/PageTitle';

const AllPublications = () => {
  const [isLoad, setIsLoad] = useState(false);
  const { publications, isLoading, isError, refetch } = usePublications();
  const axios = useAxios();

  const handleDeletePublication = async (id) => {
    swal({
      title: 'Are you sure to delete?',
      text: 'Thing again one time.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          setIsLoad(true);
          const res = await axios.delete(`/admin/deletePublication/${id}`);
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
        } finally {
          setIsLoad(false);
        }
      } else {
        swal('You changed your mind.');
      }
    });
  };

  return (
    <div>
      <PageTitle>All Publications</PageTitle>
      {/* all article tables  */}
      <div className='overflow-auto'>
        <table border={'1'} className='w-full border'>
          <thead>
            <tr className='bg-[#e3efff]'>
              <th className='tableTh'>No</th>
              <th className='tableTh'>Name</th>
              <th className='tableTh'>Logo</th>
              <th className='tableTh'>Email</th>
              <th className='tableTh'>Status</th>
              <th className='tableTh'>Action</th>
            </tr>
          </thead>
          <tbody>
            {isError && toast.error('There was an error.')}
            {!isLoading && publications.length === 0 && (
              <tr>
                <td colSpan={6} className='text-center'>
                  No Publication found
                </td>
              </tr>
            )}
            {!isLoading &&
              publications?.map((publication, index) => (
                <tr key={index} className='bg-[#ecf4ff]'>
                  <td className='tableTd'>{++index}</td>
                  <td className='tableTd'>{publication.publicationName}</td>
                  <td className='tableTd'>
                    <img
                      src={publication.publicationLogo}
                      className='w-12 h-12 rounded-full object-cover'
                    />
                  </td>
                  <td className='tableTd'>{publication.publicationEmail}</td>
                  <td className='tableTd'>{publication.isApprove}</td>
                  <td className='tableTd'>
                    {isLoad ? (
                      <UseAnimations
                        animation={loading}
                        wrapperStyle={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      />
                    ) : (
                      <span
                        onClick={() => handleDeletePublication(publication._id)}
                        className='bg-red-400 text-white px-4 py-2 rounded-full transition hover:bg-red-500 active:bg-red-600 cursor-pointer'
                      >
                        Delete
                      </span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPublications;
