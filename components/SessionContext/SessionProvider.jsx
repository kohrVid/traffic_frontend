import React, { useEffect, useState } from 'react';
import { SessionContext } from './SessionContext.jsx';
import { auth } from '../api/sessions.js';
import { catchApiErrors } from '../api/utils.js';

export const SessionProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [notices, setNotices] = useState([])
  const [authenticated, setAuthenticated] = useState(false)
  const [adminAuthenticated, setAdminAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth().then((res) => {
      if (res.ok) setAuthenticated(true)
      return res.json()
    }).then((response) => {
      if (response.data !== undefined) {
        setCurrentUser(response.data)
        setAdminAuthenticated(response.data.is_admin)
     }
    }).catch(err => {
      catchApiErrors(err, setErrors);
    });
  }, []);

  return(
    <SessionContext.Provider
      value={{
        errors: errors,
        setErrors: setErrors,
        notices: notices,
        setNotices: setNotices,
        authenticated: authenticated,
        setAuthenticated: setAuthenticated,
        adminAuthenticated: adminAuthenticated,
        setAdminAuthenticated: setAdminAuthenticated,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}>
      {children}
    </SessionContext.Provider>
  );
};
