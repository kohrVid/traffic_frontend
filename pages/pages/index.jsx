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

const Index = ({ router, headers }) => {
  const {
    setRouter,
    setReqHeaders,
    setPageId,
  } = useContext(VisitContext);

  useEffect(() => {
    if (router.isReady) {
      setRouter(router)
      setReqHeaders(headers)
      setPageId(1)
    }
  }, [router.isReady, setReqHeaders, setPageId, headers]);

  return (
    <>
      <h1>Index</h1>

      <p>
        This is a test page. Viewing this page
        will fire a request to the backend.
      </p>

      <ul>
        <li>
          <a href="/pages/about">About</a>
        </li>
        <li>
          <a href="/pages/contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default withRouter(Index);
