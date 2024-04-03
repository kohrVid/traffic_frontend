import { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { createVisit } from '@/pages/api/visits.js';
import { catchApiErrors } from '@/pages/api/utils.js';

export const getServerSideProps = async ({ req }) => {
  const referer = req.headers.referer;
  const userAgent = req.headers['user-agent'];
  const forwarded = req.headers['x-forwarded-for'];

  return {
    props: {
      referer,
      userAgent,
      forwarded,
    },
  };
};

const About = ({
  referer,
  userAgent,
  forwarded, 
}) => {
  const [errors, setErrors] = useState([])
  const pageId = 1;
  const userId = null;
  const ipAddress = forwarded;

  useEffect(() => {
    console.log(ipAddress)
    createVisit(pageId, userId, ipAddress)
      .then((res) => res.json())
      .then((response) => {
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, []);

  return (
    <>
      <h1>About</h1>
      <p>
        This is a test page. Viewing this page
        will fire a request to the backend.
      </p>
    </>
  );
};

export default About;
