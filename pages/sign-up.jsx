import { useContext, useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { SessionContext } from '@/components/SessionContext';
import { FlashMessage } from '@/components/Partials/Errors/FlashMessage';
import { AlreadyLoggedIn } from '@/components/Partials/Errors/AlreadyLoggedIn.jsx';
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
    notices,
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
        <>
          <FlashMessage success={notices} errors={errors} />

          <AlreadyLoggedIn />
        </>
      ) : (
        <>
          <h1>Sign Up</h1>

          <FlashMessage success={notices} errors={errors} />

          <RegistrationForm ipAddress={ipAddress}/>
        </>
      )}
    </>
  );
};

export default withRouter(SignUp);
