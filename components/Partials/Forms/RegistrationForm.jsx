import { useContext, useState } from 'react';
import { SessionContext } from '../../SessionContext';
import { Button, Label, PasswordInput, TextInput } from '../../FormFields';
import { signUp } from '../../api/sessions.js';
import { catchApiErrors } from '../../api/utils.js';
import styles from './styles.module.scss';

export const RegistrationForm = ({ ipAddress }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const {
    setErrors,
    setNotices,
  } = useContext(SessionContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password !== passwordConfirmation) {
      setErrors(errors => [...errors, "passwords must match"]);
      return;
    }

    signUp(username, email, password, passwordConfirmation, ipAddress).then((res) =>  {
      if ((res.status === 200) || (res.status === 201)) {
        res.json().then((response) => {
          setErrors(errors => [...errors, response.errors]);
          setNotices(notices => [...notices, "Registration successful"])

          if (typeof window !== 'undefined') {
            window.location.href = "/log-in"
          };
        });

        return
      };

      res.json().then((response) => {
        setErrors(errors => [...errors, response.errors]);
      })
    }).catch(err => {
      catchApiErrors(err, setErrors);
    })
  };

  return(
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.label}>
          <Label>Username:</Label>
        </div>
        <div className={styles.input}>
          <TextInput onChange={handleUsernameChange} value={username} />
        </div>
      </div>
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
          <Label>Password confirmation:</Label>
        </div>
        <div className={styles.input}>
          <PasswordInput onChange={handlePasswordConfirmationChange}
            value={passwordConfirmation} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          &nbsp;
        </div>
        <div className={styles.input}>
          <Button type="submit" fixedWidth="100%">
            Sign up now!
          </Button>
        </div>
      </div>
    </form>
  )
};
