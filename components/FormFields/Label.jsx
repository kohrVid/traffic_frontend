import React, { useState } from 'react';
import styles from './label.module.scss';

export const Label = ({ children, className }) => {
  return(
    <label className={styles.label + " " + className}>
      {children}
    </label>
  );
};
