import React from 'react';
import styles from './buttons.module.scss';

export const Button = ({ type, children }) => {
  return (
    <>
      <button type={type} className={styles.button}>
        {children}
      </button>
    </>
  );
};
