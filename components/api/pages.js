const controller = new AbortController()

const allPages = () => fetch(
  '/api/pages',
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

export { allPages };
