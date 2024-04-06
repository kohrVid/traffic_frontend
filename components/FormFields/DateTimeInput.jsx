import styles from './styles.module.scss';

export const DateTimeInput = ({ name, onChange }) => {
  return (
    <div className={styles.date}>
      <label htmlFor={name}>{name}:</label>
      <input type="datetime-local" id={name} name={name} onChange={onChange} />
    </div>
  );
}
