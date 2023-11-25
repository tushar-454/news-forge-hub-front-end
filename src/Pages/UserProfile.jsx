import { useState } from 'react';
import { Helmet } from 'react-helmet';
import ProfileModal from '../Components/Profile/ProfileModal';
import useAuth from '../Hook/useAuth';

const UserProfile = () => {
  const { user, loading } = useAuth();
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <section>
      <Helmet>
        <title>Profile | NewsForge Hub</title>
      </Helmet>
      {/* profile outlet  */}
      {!loading && user && (
        <>
          <div className='bg-slate-200'>
            <div className='w-full h-48 relative mb-96'>
              <img
                src='https://www.bhmpics.com/downloads/patterned-backgrounds/5.stylish-hexagonal-line-pattern-background_1017-19742.jpg'
                className='w-full h-full object-cover'
              />
              <div className='w-full grid justify-items-center'>
                <div className='absolute top-20 p-10'>
                  <div className='flex flex-col items-center'>
                    <img
                      src={user?.photoURL}
                      alt='user photo'
                      className='w-32 h-32 rounded-full border-4 border-white'
                    />
                    <h1 className='text-3xl my-3'>{user?.displayName}</h1>
                    <small className='text-center my-3'>UID: {user?.uid}</small>
                    <p className='text-xl font-medium text-center'>
                      {user?.email} . Joined {new Date().toDateString()} .
                      Visitor
                    </p>
                  </div>
                  {/* some user action  */}
                  <div className='my-10 flex justify-center gap-5'>
                    <button className='bg-[#14AAF5] border-2 border-[#14AAF5] text-white text-xl font-medium p-4 px-6 rounded-lg hover:bg-[#0080CB] active:bg-white active:text-[#0080CB] transition'>
                      Become a Publisher
                    </button>
                    <button
                      onClick={() => setIsShowModal(!isShowModal)}
                      className='bg-[#796EFF] border-2 border-[#796EFF] text-white text-xl font-medium p-4 px-6 rounded-lg hover:bg-[#653DEE] active:bg-white active:text-[#653DEE] transition'
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isShowModal && <ProfileModal closeFunc={setIsShowModal} />}
        </>
      )}
    </section>
  );
};

export default UserProfile;
