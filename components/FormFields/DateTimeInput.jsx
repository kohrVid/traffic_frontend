import styles from './styles.module.scss';

export const DateTimeInput = ({ name, onChange }) => {
  return (
    <div className={styles.date}>
      <input type="datetime-local" id={name} name={name} onChange={onChange} />
    </div>
  );
};
