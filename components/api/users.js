const controller = new AbortController()

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

export { user, userVisits };
