import React, { useState } from 'react';
import styles from './inputs.module.scss';

export const TextInput = (props) => {
  return(
    <>
      <input className={styles.input}
        onChange={props.onChange}
        type="text"
        defaultValue={props.defaultValue}
        value={props.value}
      />
    </>
  )
};

export const PasswordInput = (props) => {
  return(
    <>
      <input className={styles.input}
        onChange={props.onChange}
        type="password"
        value={props.value}
      />
    </>
  )
};

export const CheckboxInput = (props) => {
  return(
    <>
      <input className={styles.input}
        onChange={props.onChange}
        type="checkbox"
        value={props.value}
      />
    </>
  )
};
