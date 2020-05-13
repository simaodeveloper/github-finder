import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <Spinner />
  ) : (
    <div style={usersStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

UserItem.defaultProps = {
  users: [],
};

export default Users;
