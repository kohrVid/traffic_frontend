import { useContext, useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { withRouter } from 'next/router';
import { VisitContext } from '@/components/VisitContext';
import styles from './styles.module.scss';

export const getServerSideProps = async ({ req }) => (
  {
    props: {
      headers: req.headers
    }
  }
);

const About = ({ router, headers }) => {
  const {
    setRouter,
    setReqHeaders,
    setPageId,
  } = useContext(VisitContext);

  useEffect(() => {
    if (router.isReady) {
      setRouter(router)
      setReqHeaders(headers)
      setPageId(2)
    }
  }, [router.isReady, setReqHeaders, setPageId, headers]);

  return (
    <>
      <h1>About</h1>

      <p className={styles.autoFlex}>
        This is a test page. Viewing this page
        will fire a request to the backend.
      </p>
    </>
  );
};

export default withRouter(About);
