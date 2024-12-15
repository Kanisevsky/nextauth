import { Children } from 'react';
import CardWrapper from './cardWrapper';

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account"
      showSocial
    />
  );
};

export default LoginForm;
