import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { VisitContext } from './VisitContext.jsx';
import { createVisit } from '../api/visits.js';
import { catchApiErrors } from '../api/utils.js';

export const VisitProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [router, setRouter] = useState();
  const [pageId, setPageId] = useState(null);
  const [reqHeaders, setReqHeaders] = useState({})

  const {
    currentUser,
  } = useContext(SessionContext);

  useEffect(() => {
    const ipAddress = reqHeaders['x-forwarded-for'] || '::1';
    const userId = currentUser ? currentUser.id : null

    if (pageId != null) {
      createVisit(pageId, userId, ipAddress)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
        }).catch(err => {
          catchApiErrors(err, setErrors);
        });
    };
  }, [reqHeaders, currentUser, pageId]);

  return(
    <VisitContext.Provider
      value={{
        errors,
        setErrors,
        router,
        setRouter,
        pageId,
        setPageId,
        reqHeaders,
        setReqHeaders,
      }}>
      {children}
    </VisitContext.Provider>
  )
};
