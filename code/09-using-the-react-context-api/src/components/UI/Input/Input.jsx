import { forwardRef, useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

export const Input = forwardRef(
  ({ type, id, value, isValid, onChange, onBlur, label }, ref) => {
    const inputRef = useRef();

    function activate() {
      inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });
    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);
