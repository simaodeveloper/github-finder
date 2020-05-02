const BASE_URL = 'https://api.github.com';
const client_id = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
const secret_id = `secret_id=${process.env.REACT_APP_GITHUB_SECRET_ID}`;

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
}

export const getUsers = async () => {
  return request(`${BASE_URL}/users?${client_id}&${secret_id}`);
}
