import { useState } from 'react';
import toast from 'react-hot-toast';
import useAllUser from '../Hook/useAllUser';
import useAxios from '../Hook/useAxios';
import PageTitle from '../Shared/PageTitle';

const AllUser = () => {
  const [clickPage, setClickPage] = useState(0);
  const { allUsers, isLoading, isError, refetch } = useAllUser();
  const { paginationUser, pagiUserLoad, pagiUserRefetch } =
    useAllUser(clickPage);
  const axios = useAxios();
  const page = Math.ceil(!isLoading && allUsers.length / 2);
  const btnArr = [...new Array(page).keys()];

  // handle role update
  const handleRoleUpdate = async (e, email) => {
    const rolevalue = e.target.value;
    const res = await axios.patch(`/admin/users/${email}`, { role: rolevalue });
    if (res.data.message) {
      toast.success('User role update success');
      refetch();
    } else {
      toast.error('There was an error');
    }
  };

  const handlePagination = (page) => {
    setClickPage(parseInt(page));
    pagiUserRefetch();
  };

  const handlePrev = () => {
    if (clickPage > 0) {
      setClickPage(clickPage - 1);
      pagiUserRefetch();
    }
  };
  const handleNext = () => {
    if (clickPage < page - 1) {
      setClickPage(clickPage + 1);
      pagiUserRefetch();
    }
  };

  return (
    <section>
      <PageTitle>All Users</PageTitle>
      {/* all users tables  */}
      <div className='overflow-auto'>
        <table border={'1'} className='w-full border'>
          <thead>
            <tr className='bg-[#e3efff]'>
              <th className='tableTh'>No</th>
              <th className='tableTh'>Photo</th>
              <th className='tableTh'>Name</th>
              <th className='tableTh'>Email</th>
              <th className='tableTh'>Role</th>
              <th className='tableTh'>Premium</th>
              <th className='tableTh'>Action</th>
            </tr>
          </thead>
          <tbody>
            {isError && toast.error('There was an error.')}
            {!isLoading && allUsers.length === 0 && (
              <tr>
                <td colSpan={6} className='text-center'>
                  No user found
                </td>
              </tr>
            )}
            {!pagiUserLoad &&
              paginationUser?.map((user, index) => (
                <tr key={index} className='bg-[#ecf4ff]'>
                  <td className='tableTd'>{++index}</td>
                  <td className='tableTd'>
                    <img
                      src={user.photo}
                      className='w-12 h-12 rounded-full object-cover'
                    />
                  </td>
                  <td className='tableTd'>{user.name}</td>
                  <td className='tableTd'>{user.email}</td>
                  <td className='tableTd'>{user.role}</td>
                  <td className='tableTd'>
                    {user.isPremium ? 'Premium' : 'No Premium'}
                  </td>
                  <td className='border border-white'>
                    <select
                      name=''
                      id=''
                      defaultValue={user.role}
                      className='outline-none bg-none bg-transparent border-none w-full cursor-pointer'
                      onChange={(e) => handleRoleUpdate(e, user.email)}
                    >
                      <option value='USER'>USER</option>
                      <option value='ADMIN'>ADMIN</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* pagination  */}
      <div className='flex justify-center items-center gap-4 my-5'>
        <span
          onClick={handlePrev}
          className='w-12 px-10 py-3 rounded flex justify-center bg-white font-bold text-lg cursor-pointer'
        >
          Prev
        </span>
        {btnArr.map((item, index) => (
          <span
            onClick={() => handlePagination(index)}
            key={index}
            className='w-12 h-12 flex justify-center items-center bg-white font-bold text-lg cursor-pointer'
          >
            {++index}
          </span>
        ))}
        <span
          onClick={handleNext}
          className='w-12 px-10 py-3 rounded flex justify-center bg-white font-bold text-lg cursor-pointer'
        >
          Next
        </span>
      </div>
    </section>
  );
};

export default AllUser;
