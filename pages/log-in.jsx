import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { LogInForm } from '@/components/Forms/LogInForm';
import { LogOutForm } from '@/components/Forms/LogOutForm';
import { catchApiErrors } from '@/components/api/utils.js';

const LogIn = () => {
  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
  } = useContext(SessionContext);

  return (
    <>
      <h1>Log In</h1>

      <LogInForm />
      <LogOutForm />
    </>
  );
};

export default LogIn;
