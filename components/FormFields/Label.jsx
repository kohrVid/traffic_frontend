import React from 'react';
import styles from './label.module.scss';

export const Label = ({ htmlFor, children, className }) => {
  return(
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
    </label>
  );
};
