import { useContext, useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { withRouter } from 'next/router';
import { VisitContext } from '@/components/VisitContext';

export const getServerSideProps = async ({ req }) => (
  {
    props: {
      headers: req.headers
    }
  }
);

const Contact = ({ router, headers }) => {
  const {
    setRouter,
    setReqHeaders,
    setPageId,
  } = useContext(VisitContext);

  useEffect(() => {
    if (router.isReady) {
      setRouter(router)
      setReqHeaders(headers)
      setPageId(3)
    }
  }, [router.isReady, setReqHeaders, setPageId, headers]);

  return (
    <>
      <h1>Contact</h1>
      <p>
        This is a fake contact page. Viewing this page
        will fire a request to the backend.
      </p>
    </>
  );
};

export default withRouter(Contact);
