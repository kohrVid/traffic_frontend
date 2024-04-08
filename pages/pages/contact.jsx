import { useContext, useEffect } from 'react';
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
  }, [router.isReady, router, setRouter, setReqHeaders, setPageId, headers]);

  return (
    <>
      <h1>Contact</h1>

      <p className={styles.autoFlex}>
        This is a fake contact page. Viewing this page
        will fire a request to the backend.
      </p>
    </>
  );
};

export default withRouter(Contact);
