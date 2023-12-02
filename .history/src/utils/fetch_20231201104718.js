export const send_request = async (
  url,
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  payload = null,
  extra_headers = null
) => {
  if (extra_headers)
    headers = {
      ...headers,
      ...extra_headers,
    };
  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(payload),
  });
};

export default {
  send_request,
};
