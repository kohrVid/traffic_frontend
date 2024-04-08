import { useContext, useEffect, useState } from 'react';
import { Link } from '@/components/Link';
import { userVisits } from '../../api/users.js';
import { catchApiErrors } from '../../api/utils.js';
import styles from './styles.module.scss';

export const PageVisits = ({ userId }) => {
  const [visits, setVisits] = useState([])

  useEffect(() => {
    userVisits(userId).then((res) => res.json())
      .then((response) => {
        setVisits(response.data);
      }).catch(err => {
        catchApiErrors(err, setErrors);
      });
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Page Name</th>
          <th>Page URL</th>
          <th>IP Address</th>
          <th>Co-ordinates</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {visits && visits.map((visit) => (
          <tr>
            <td>{visit.page_name}</td>
            <td>
              <Link href={visit.page_url}>{visit.page_url}</Link>
            </td>
            <td>{visit.ip_address}</td>
            <td>({visit.latitude}, {visit.longitude})</td>
            <td>{visit.visited_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
