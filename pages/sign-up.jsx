import { useContext, useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { SessionContext } from '@/components/SessionContext';
import { AlreadyLoggedIn } from '@/components/Partials/Errors/AlreadyLoggedIn';
import { RegistrationForm } from '@/components/Partials/Forms/RegistrationForm';

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
  } = useContext(SessionContext);

  useEffect(() => {
    if (router.isReady) {
      setIpAddress(headers['x-forwarded-for']);
    }
  }, [router.isReady, setIpAddress, headers]);

  return (
    <>
      {authenticated ? (
        <AlreadyLoggedIn />
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
