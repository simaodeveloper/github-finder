const BASE_URL = "https://api.github.com";

let client_id = "client_id=";
let secret_id = "secret_id=";

if (process.env.NODE_ENV !== "production") {
  client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  secret_id = process.env.REACT_APP_GITHUB_SECRET_ID;
} else {
  client_id = process.env.GITHUB_CLIENT_ID;
  secret_id = process.env.GITHUB_SECRET_ID;
}

const github_ids = `client_id=${client_id}&secret_id=${secret_id}`;

const request = async (url) => {
  return await fetch(url);
};

export const getUsers = async () => {
  const res = await request(`${BASE_URL}/users?${github_ids}`);
  return res.json();
};

export const getUsersByUserName = async (username) => {
  const res = await request(
    `${BASE_URL}/search/users?q=${username}&${github_ids}`
  );
  const data = await res.json();
  return data.items;
};

export const getUserByLogin = async (login) => {
  const res = await request(`${BASE_URL}/users/${login}?${github_ids}`);
  return await res.json();
};

export const getReposByLogin = async (login) => {
  const res = await request(
    `${BASE_URL}/users/${login}/repos?per_page=5&sort=created&${github_ids}`
  );
  return await res.json();
};
