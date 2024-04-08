import React from 'react';
import PropTypes from 'prop-types';
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
