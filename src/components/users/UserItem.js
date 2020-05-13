import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px", display: "block", margin: "auto" }}
        alt=""
      />
      <p>{login}</p>

      <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
