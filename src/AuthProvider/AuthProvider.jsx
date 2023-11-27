import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Auth from '../Config/firebase-config';
import useAxios from '../Hook/useAxios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  // login with google
  const loginWithGoogle = () => {
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };

  // signup or crate account with email and password
  const signupWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // signin account with email and password
  const loginWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //logout account
  const logOutAccount = () => {
    setLoading(false);
    signOut(Auth)
      .then(() => {
        toast.success('Logout successfull');
        axios.post('/jwt/token-remove', {});
      })
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    setLoading,
    loginWithGoogle,
    signupWithEmailPassword,
    loginWithEmailPass,
    logOutAccount,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
