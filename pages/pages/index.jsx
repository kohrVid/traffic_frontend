import { useContext, useEffect } from 'react';
import { withRouter } from 'next/router';
import { VisitContext } from '@/components/VisitContext';
import { Link } from '@/components/Link';
import styles from './styles.module.scss';

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
  }, [router.isReady, router, setRouter, setReqHeaders, setPageId, headers]);

  return (
    <>
      <h1>Index</h1>

      <p className={styles.autoFlex}>
        This is a test page. Viewing this page
        will fire a request to the backend.
      </p>

      <ul className={styles.autoFlex}>
        <li>
          <Link href="/pages/about">About</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default withRouter(Index);
