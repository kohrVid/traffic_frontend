import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../SessionContext';
import { LogOutForm } from '../Forms/LogOutForm';
import { Link } from '../Link';
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
          <Link className={styles.title} href="/">
            Page Traffic
          </Link>
        </li>
      </ul>

      <ul className={`${styles.navItems} ${styles.navLinks}`}>
        {authenticated ? (
          <>
            <li>
              <Link href="/pages">Tracked Pages</Link>
            </li>
            <li>
              <LogOutForm />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link href="/log-in">Log In</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
