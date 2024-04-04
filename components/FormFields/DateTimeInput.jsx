import styles from './styles.module.scss';

export const DateTimeInput = ({ name }) => {
  return (
    <div className={styles.date}>
      <label htmlFor={name}>{name}:</label>
      <input type="datetime-local" id={name} name={name} />
    </div>
  );
}
