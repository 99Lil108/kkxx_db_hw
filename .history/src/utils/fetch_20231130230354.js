export const send_request = async (
  url,
  method = "POST",
  header = {
    "Content-Type": "application/json",
  },
  payload = null
) => {
  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  });
};

export default {
  send_request,
};
