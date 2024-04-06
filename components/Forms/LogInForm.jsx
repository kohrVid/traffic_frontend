import { useContext, useState } from 'react';
import { SessionContext } from '../SessionContext';
import { Button, Label, PasswordInput, TextInput } from '../FormFields';
import { logIn } from '../api/sessions.js';
import { catchApiErrors } from '../api/utils.js';


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
      if (res.ok) setAuthenticated(true)
      return res.json()
    }).then((response) => {
      if (response.data !== undefined) {
        setCurrentUser(response.data)
      }
      if (response.errors !== undefined) {
        setErrors(errors => [...errors, response.errors]);
      }
    }).finally(() => setIsLoading(false)).catch(err => {
      catchApiErrors(err, setErrors);
    });
  };

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Label>Email:</Label>
        <TextInput onChange={handleEmailChange} value={email} />
      </div>
      <div>
        <Label>Password:</Label>
        <PasswordInput onChange={handlePasswordChange} value={password} />
      </div>
      <div>
        <Button type="submit" fixedWidth="100%">
          Log In!
        </Button>
      </div>
    </form>
  )
};
