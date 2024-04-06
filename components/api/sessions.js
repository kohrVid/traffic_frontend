const controller = new AbortController()

const signUp = (
  username,
  email,
  password,
  passwordConfirmation,
  ipAddress,
) => fetch(
  '/api/users',
  {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    body: JSON.stringify({
      user: {
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        registration_ip_info_attributes: {
          address: ipAddress,
        },
      }
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

const logIn = (
  email,
  password,
) => fetch(
  '/api/users/sign_in',
  {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    body: JSON.stringify({
      user: {
        email: email,
        password: password,
      }
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

const logOut = () => fetch(
  '/api/users/sign_out',
  {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

export { logIn, logOut, signUp };
