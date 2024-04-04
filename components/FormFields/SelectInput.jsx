import styles from './styles.module.scss';

export const SelectInput = ({ name, options }) => {
  return (
    <div>
      <label htmlFor={name}>Select a page:</label>

      <select name={name} id={name}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
