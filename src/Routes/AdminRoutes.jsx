import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import useUserInfo from '../Hook/useUserInfo';

const AdminRoutes = ({ children }) => {
  const { userInfo, isLoading } = useUserInfo();
  if (isLoading) {
    return (
      <UseAnimations
        animation={loading}
        wrapperStyle={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    );
  }
  if (userInfo.role !== 'ADMIN') {
    return <Navigate to={'/'} />;
  }
  return children;
};

AdminRoutes.propTypes = {
  children: PropTypes.node,
};

export default AdminRoutes;
