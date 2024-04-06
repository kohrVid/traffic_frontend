import { useContext, useState } from 'react';
import { SessionContext } from '../SessionContext';
import { Button, Label, PasswordInput, TextInput } from '../FormFields';
import { signUp } from '../api/sessions.js';
import { catchApiErrors } from '../api/utils.js';


export const RegistrationForm = ({ ipAddress }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const {
    errors,
    setErrors,
    notices,
    setNotices,
    authenticated,
    setAuthenticated,
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
          if (typeof window !== 'undefined') {
            window.location.href = "/log-in"
          };
        });

        return
      };

      res.json().then((response) => {
        setErrors(errors => [...errors, response.errors]);
        console.log(response.errors);
      })
    }).catch(err => {
      catchApiErrors(err, setErrors);
    })
  };

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Label>Username:</Label>
        <TextInput onChange={handleUsernameChange} value={username} />
      </div>
      <div>
        <Label>Email:</Label>
        <TextInput onChange={handleEmailChange} value={email} />
      </div>
      <div>
        <Label>Password:</Label>
        <PasswordInput onChange={handlePasswordChange} value={password} />
      </div>
      <div>
        <Label>Password confirmation:</Label>
        <PasswordInput onChange={handlePasswordConfirmationChange}
          value={passwordConfirmation} />
      </div>
      <div>
        <Button type="submit" fixedWidth="100%">
          Sign up now!
        </Button>
      </div>
    </form>
  )
};
