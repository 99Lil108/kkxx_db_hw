export const send_request = async ({
    url,
    method = "POST",
    headers = {
      "Content-Type": "application/json",
    },
    payload = {},
    extra_headers = null,
  }) => {
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
  },
  getVerifyToken = (token) => {
    return {
      Authorization: "Bearer " + token,
    };
  };

export default {
  send_request,
  getVerifyToken,
};
