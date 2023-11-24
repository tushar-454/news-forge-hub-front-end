import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PublicRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>Loading..</p>;
  }
  if (user && !loading) {
    return <Navigate to={'/'} />;
  }
  return children;
};

PublicRoutes.propTypes = {
  children: PropTypes.node,
};

export default PublicRoutes;
