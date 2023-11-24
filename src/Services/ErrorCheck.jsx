const ErrorCheck = ({ name, email, photoUrl, password, confirmPassword }) => {
  if (!name || !email || !password || !confirmPassword) {
    return 'Name is required!';
  }
};

export default ErrorCheck;
