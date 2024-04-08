import { useContext, useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { SessionContext } from '@/components/SessionContext';
import { PleaseLogIn } from '@/components/PleaseLogIn';
import { LogInForm } from '@/components/Forms/LogInForm';
import { PageVisits } from '@/components/PageVisits';
import { user as getUser } from '@/components/api/users.js';
import { catchApiErrors } from '@/components/api/utils.js';
import styles from './styles.module.scss';

const UsersShow = ({ router }) => {
  const [userId, setUserId] = useState();
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [user, setUser] = useState({})

  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
    adminAuthenticated,
    setAdminAuthenticated,
    currentUser,
    setCurrentUser,
  } = useContext(SessionContext);

  useEffect(() => {
    if (router.isReady) {
      setUserId(parseInt(router.query.id));
      currentUser && setIsAuthorised(
        (currentUser.id === userId) || adminAuthenticated
      );
    }
  }, [router.isReady, currentUser, adminAuthenticated]);

  useEffect(() => {
    userId && getUser(userId).then((res) => res.json())
      .then((response) => {
        setUser(response.data);
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, [userId]);

  return (
    <>
      {!authenticated ? (
        <PleaseLogIn />
          ) : (
        <>
          {!isAuthorised ? (
            <p>
              Sorry, you are not authorised to view this page
            </p>
          ) : (
            <>
              {user && (
                <>
                  <h1>{user.username}</h1>

                  <ul className={`${styles.autoFlex} ${styles.noBullet}`}>
                    <li>
                      Id: {user.id}
                    </li>
                    <li>
                      Username: {user.username}
                    </li>
                    <li>
                      Email: {user.email}
                    </li>
                    {user.registration_ip_info && (
                      <>
                        <li>
                          Registration IP address: {user.registration_ip_info.address}
                        </li>
                        <li>
                          Registration latitude: {user.registration_ip_info.latitude}
                        </li>
                        <li>
                          Registration longitude: {user.registration_ip_info.longitude}
                        </li>
                      </>
                    )}
                    <li>
                      Admin user?: {user.is_admin ? "Yes" : "No"}
                    </li>
                  </ul>

                  {userId && (
                    <PageVisits userId={userId} />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default withRouter(UsersShow);
