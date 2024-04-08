import { useContext, useState } from 'react';
import { SessionContext } from '../SessionContext';
import { Button, Label, PasswordInput, TextInput } from '../FormFields';
import { logIn } from '../api/sessions.js';
import { catchApiErrors } from '../api/utils.js';
import styles from './styles.module.scss';

export const LogInForm = ({ ipAddress }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
  } = useContext(SessionContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    logIn(email, password).then((res) => {
      if ((res.status === 200) || (res.status === 201)) {
        setAuthenticated(true)
        if (typeof window !== 'undefined') { window.location.href = "/" };

        return res.json()
      }
    }).then((response) => {
      if (response.data !== undefined) {
        setCurrentUser(response.data)
      }
      if (response.errors !== undefined) {
        setErrors(errors => [...errors, response.errors]);
      }
    }).catch(err => {
      catchApiErrors(err, setErrors);
    });
  };

  return(
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.label}>
          <Label>Email:</Label>
        </div>
        <div className={styles.input}>
          <TextInput onChange={handleEmailChange} value={email} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          <Label>Password:</Label>
        </div>
        <div className={styles.input}>
          <PasswordInput onChange={handlePasswordChange} value={password} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          &nbsp;
        </div>
        <div className={styles.input}>
          <Button type="submit" fixedWidth="100%">
            Log In!
          </Button>
        </div>
      </div>
    </form>
  )
};
