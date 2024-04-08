import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { PleaseLogIn } from '@/components/PleaseLogIn';
import { Link } from '@/components/Link';
import { users as getUsers } from '@/components/api/users.js';
import { catchApiErrors } from '@/components/api/utils.js';
import styles from './styles.module.scss';

const UsersIndex = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [users, setUsers] = useState([])

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
    setIsAuthorised(adminAuthenticated);

    getUsers().then((res) => res.json())
      .then((response) => {
        setUsers(response.data);
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, [adminAuthenticated]);

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
              {users && (
                <>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Registration IP Address</th>
                        <th>Registration Co-ordinates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr>
                          <td>
                            <Link href={`/users/${user.id}`}>{user.id}</Link>
                          </td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>
                            (
                              {user.registration_ip_info.latitude},&nbsp;
                              {user.registration_ip_info.longitude}
                            )
                          </td>
                          <td>{user.registration_ip_info.address}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UsersIndex;