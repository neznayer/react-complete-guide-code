import classes from './Input.module.css';
export const Input = ({
  type,
  id,
  value,
  isValid,
  onChange,
  onBlur,
  label,
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
