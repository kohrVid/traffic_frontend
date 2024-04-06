import React, { useEffect, useState } from 'react';
import { SessionContext } from './SessionContext.jsx';
import { auth } from '../api/sessions.js';
import { catchApiErrors } from '../api/utils.js';

export const SessionProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [notices, setNotices] = useState([])
  const [authenticated, setAuthenticated] = useState(false)

  return(
    <SessionContext.Provider
      value={{
        errors: errors,
        setErrors: setErrors,
        notices: notices,
        setNotices: setNotices,
        authenticated: authenticated,
        setAuthenticated: setAuthenticated,
      }}>
      {children}
    </SessionContext.Provider>
  );
};
