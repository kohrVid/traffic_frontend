import { useContext, useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { withRouter } from 'next/router';
import { SessionContext } from '@/components/SessionContext';
import { VisitContext } from '@/components/VisitContext';
import { LoggedIn } from '@/components/LoggedIn';
import { RegistrationForm } from '@/components/Forms/RegistrationForm';
import { catchApiErrors } from '@/components/api/utils.js';

export const getServerSideProps = async ({ req }) => (
  {
    props: {
      headers: req.headers
    }
  }
);

const SignUp = ({ router, headers }) => {
  const [ipAddress, setIpAddress] = useState('');

  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
  } = useContext(SessionContext);

  useEffect(() => {
    if (router.isReady) {
      setIpAddress(headers['x-forwarded-for']);
    }
  }, [router.isReady, setIpAddress]);

  return (
    <>
      {authenticated ? (
        <LoggedIn />
      ) : (
        <>
          <h1>Sign Up</h1>

          <RegistrationForm ipAddress={ipAddress}/>
        </>
      )}
    </>
  );
};

export default withRouter(SignUp);
