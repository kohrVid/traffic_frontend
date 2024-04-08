import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '@/components/SessionContext';
import { VisitContext } from '@/components/VisitContext';
import { DateTimeInput, Label, SelectInput } from '@/components/FormFields';
import { FlashMessage } from '@/components/Partials/Errors/FlashMessage';
import { WorldMap } from '@/components/Partials/WorldMap';
import { allPages } from '@/components/api/pages.js';
import { listVisits } from '@/components/api/visits.js';
import { catchApiErrors } from '@/components/api/utils.js';
import styles from '@/components/home.module.scss';

export default function Home() {
  const [pages, setPages] = useState([]);
  const [visits, setVisits] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const {
    errors,
    notices,
    setNotices,
    authenticated,
  } = useContext(SessionContext);

  const {
    setErrors,
    pageId,
    setPageId,
  } = useContext(VisitContext);

  const handlePageChange = (e) => {
    setPageId(e.target.value)
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value)
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value)
  };

  useEffect(() => {
    allPages().then((res) => res.json())
      .then((response) => {
        let pagesList = response.data
        pagesList.unshift({ id: '', name: 'all pages'})
        setPages(pagesList)
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, [setErrors]);

  useEffect(() => {
    listVisits(pageId, fromDate, toDate)
      .then((res) => res.json())
      .then((response) => {
        setVisits(response.data)
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, [pageId, fromDate, toDate, setErrors]);

  return (
    <>
      <h1>View page traffic data</h1>

      <FlashMessage success={notices} errors={errors} />

      {pages && (pages.length > 0) && (
        <>
          <Label htmlFor="pages">
            Select a page:
          </Label>
          <SelectInput name="pages" options={pages} onChange={handlePageChange} />
        </>
      )}

      <div className={styles.row}>
        <div className={styles.item}>
          <Label htmlFor="from">
            From:
          </Label>
          <DateTimeInput name="from" onChange={handleFromDateChange} />
        </div>
        <div className={styles.item}>
          <Label htmlFor="to">
            To:
          </Label>
          <DateTimeInput name="to" onChange={handleToDateChange} />
        </div>
      </div>
      <WorldMap visits={visits} />
    </>
  );
};
