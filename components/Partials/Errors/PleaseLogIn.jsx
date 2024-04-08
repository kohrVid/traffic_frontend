import { Link } from '../../Link';
import styles from './styles.module.scss';

export const PleaseLogIn = () => {
  return (
    <p className={styles.autoFlex}>
      Please <Link href="/log-in">log in</Link> to view this page
    </p>
  );
};
