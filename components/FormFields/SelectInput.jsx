import styles from './styles.module.scss';

export const SelectInput = ({ name, options, onChange }) => {
  return (
    <div>
      <select name={name} id={name} onChange={onChange}>
        {options.map((option, idx) => (
          <option key={`${name}-option-${idx}`} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
