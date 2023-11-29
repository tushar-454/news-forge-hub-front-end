import axios from 'axios';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
});

const useAxios = () => {
  const user = useAuth();
  // console.log(user?.logOutAccount);
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          user?.logOutAccount().then(() => {
            return <Navigate to={'/'} />;
          });
        }
        return Promise.reject(error);
      }
    );
  }, [user]);

  return instance;
};

export default useAxios;
