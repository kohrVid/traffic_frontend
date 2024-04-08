const controller = new AbortController()

const users = () => fetch(
  `/api/users`,
  {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

const user = (id) => fetch(
  `/api/users/${id}`,
  {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

const userVisits = (id) => fetch(
  `/api/users/${id}/visits`,
  {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

export { users, user, userVisits };
