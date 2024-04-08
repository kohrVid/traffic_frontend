import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../SessionContext';
import { LogOutForm } from '../Forms/LogOutForm';
import styles from './styles.module.scss';

export const Menu = () => {
  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
    adminAuthenticated,
    setAdminAuthenticated,
  } = useContext(SessionContext);

  return (
    <nav role="navigation" className={styles.wrapper}>
      <ul className={styles.navItems}>
        <li>
          <a className={`${styles.title} ${styles.plainLink}`} href="/">
            Page Traffic
          </a>
        </li>
      </ul>

      <ul className={`${styles.navItems} ${styles.navLinks}`}>
        {authenticated ? (
          <li>
            <LogOutForm />
          </li>
        ) : (
          <>
            <li>
              <a href="/sign-up">Sign Up</a>
            </li>
            <li>
              <a href="/log-in">Log In</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
