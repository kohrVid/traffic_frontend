import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { LoggedIn } from '@/components/LoggedIn';
import { LogInForm } from '@/components/Forms/LogInForm';

const LogIn = () => {
  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
    adminAuthenticated,
    setAdminAuthenticated,
  } = useContext(SessionContext);

  return (
    <>
      {authenticated ? (
        <LoggedIn />
      ) : (
        <>
          <h1>Log In</h1>

          <LogInForm />
        </>
      )}
    </>
  );
};

export default LogIn;
