import styles from './styles.module.scss';

export const DateInput = ({ name }) => {
  return (
    <div className={styles.date}>
      <label htmlFor={name}>{name}:</label>
      <input type="date" id={name} name={name} />
    </div>
  );
}
