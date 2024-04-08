import styles from './styles.module.scss';

export const Unauthorised = () => {
  return (
    <p className={styles.autoFlex}>
      Sorry, you are not authorised to view this page
    </p>
  );
};
