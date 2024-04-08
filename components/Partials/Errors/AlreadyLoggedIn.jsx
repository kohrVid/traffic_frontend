import styles from './styles.module.scss';

export const AlreadyLoggedIn = () => {
  return (
    <p className={styles.autoFlex}>
      You are already logged in!
    </p>
  );
};
