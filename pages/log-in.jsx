import { useContext } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { FlashMessage } from '@/components/Partials/Errors/FlashMessage';
import { AlreadyLoggedIn } from '@/components/Partials/Errors/AlreadyLoggedIn.jsx';
import { LogInForm } from '@/components/Partials/Forms/LogInForm';

const LogIn = () => {
  const {
    errors,
    notices,
    authenticated,
  } = useContext(SessionContext);

  return (
    <>
      {authenticated ? (
        <>
          <FlashMessage success={notices} errors={errors} />

          <AlreadyLoggedIn />
        </>
      ) : (
        <>
          <h1>Log In</h1>

          <FlashMessage success={notices} errors={errors} />

          <LogInForm />
        </>
      )}
    </>
  );
};

export default LogIn;
