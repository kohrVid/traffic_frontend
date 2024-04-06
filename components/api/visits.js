const controller = new AbortController()

const listVisits = (pageId, fromDate, toDate) => {
  const queryParams = (pageId || fromDate || toDate) ? (
    {
      page_id: pageId,
      from: fromDate,
      to: toDate,
    }) : {}

  return fetch(
    visitsPath(queryParams),
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
};

const createVisit = (pageId, userId, ipAddress) => fetch(
  '/api/visits',
  {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    signal: controller.signal,
    body: JSON.stringify({
      page_id: pageId,
      user_id: userId,
      visited_at: new Date().toISOString(),
      ip_info_attributes: {
        address: ipAddress,
      },
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }
);

const visitsPath = (queryParams) => {
  const isQueryPresent = Object.entries(queryParams).length > 0

  return (isQueryPresent) ? (
    '/api/visits?' +
      new URLSearchParams(
        Object.fromEntries(
          Object.entries(queryParams).filter(([_, v]) => !isBlank(v))
        )
      )
    ) : ('/api/visits');
};

const isBlank = (value) => ([null, ''].includes(value));

export { listVisits, createVisit }
