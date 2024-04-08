import React from 'react';
import styles from './styles.module.scss';

export const FlashMessage = ({ errors, success }) => {
  return(
    <div className={styles.wrapper}>
      {errors && (errors.length > 0)
        && errors.some((err) => err != undefined)
        && errorMessage(errors)}

      {success && (Object.keys(success).length > 0) &&
        successMessage(success)}
    </div>
  )
};

const errorMessage = (errors) => {
  const uniqErrors = new Set(errors.flat())

  return(
    <div className={styles.error}>
      <h3>Error!</h3>
      <ul className={styles.noBullet}>
        {Array.from(uniqErrors).filter((error) => error != undefined)
          .map((error, idx) => {
            return(<li key={`err-${idx}`}>{error}</li>)
          })
        }
      </ul>
    </div>
  )
};

const successMessage = (notices) => {
  const success = new Set(notices.flat());

  return(
    <div className={styles.success}>
      {success}
    </div>
  )
};
