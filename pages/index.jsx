import { useContext, useEffect, useState } from 'react';
import { VisitContext } from '@/components/VisitContext';
import { DateTimeInput, SelectInput } from '@/components/FormFields';
import { WorldMap } from '@/components/WorldMap';
import { allPages } from '@/components/api/pages.js';
import { listVisits } from '@/components/api/visits.js';
import { catchApiErrors } from '@/components/api/utils.js';

export default function Home() {
  const [pages, setPages] = useState([{ id: '', name: 'all pages'}]);
  const [visits, setVisits] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

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
        setPages(Array.from(new Set(pages.concat(response.data))))
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, []);

  useEffect(() => {
    listVisits(pageId, fromDate, toDate)
      .then((res) => res.json())
      .then((response) => {
        setVisits(response.data)
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, [pageId, fromDate, toDate]);

  return (
    <>
      <h1>Page Traffic</h1>
      {pages && (pages.length > 0) && (
        <SelectInput name="pages" options={pages} onChange={handlePageChange} />
      )}
      <DateTimeInput name="from" onChange={handleFromDateChange} />
      <DateTimeInput name="to" onChange={handleToDateChange} />
      <WorldMap visits={visits} />
    </>
  );
};
