import { useContext } from 'react';
import { SessionContext } from '../SessionContext';
import { logOut } from '../api/sessions.js';
import { catchApiErrors } from '../api/utils.js';

export const LogOutForm = () => {
  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
  } = useContext(SessionContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    logOut().then((res) => {
      if ((res.status === 200) || (res.status === 204)) {
        setAuthenticated(false)
        setNotices('Logged out')

        if (typeof window !== 'undefined') { window.location.href = "/" };
      }
    }).catch(err => {
      catchApiErrors(err, setErrors);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Log Out" />
      </form>
    </div>
  );
};
