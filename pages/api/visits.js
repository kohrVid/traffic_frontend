const controller = new AbortController()

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

export { createVisit }
