import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { AlreadyLoggedIn } from '@/components/Partials/Errors/AlreadyLoggedIn';
import { LogInForm } from '@/components/Partials/Forms/LogInForm';

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
        <AlreadyLoggedIn />
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
