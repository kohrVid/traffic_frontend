import { useEffect, useState } from 'react';
import { DateInput, SelectInput } from '@/components/FormFields';
import { WorldMap } from '@/components/WorldMap';
import { allPages } from '@/components/api/pages.js';
import { allVisits } from '@/components/api/visits.js';
import { catchApiErrors } from '@/components/api/utils.js';

export default function Home() {
  const [pages, setPages] = useState([])
  const [visits, setVisits] = useState([])

  useEffect(() => {
    allPages().then((res) => res.json())
      .then((response) => {
        setPages(response.data)
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });

    allVisits().then((res) => res.json())
      .then((response) => {
        setVisits(response.data)
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });

  }, []);

  return (
    <>
      <h1>Page Traffic</h1>
      {pages && (pages.length > 0) && (
        <SelectInput name="pages" options={pages} />
      )}
      <DateInput name="from" />
      <DateInput name="to" />
      <WorldMap visits={visits} />
    </>
  );
}
