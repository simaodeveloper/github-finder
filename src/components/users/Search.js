import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = ({ alertHandler }) => {
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = ({ target }) => setText(target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (text) {
      fetchUsers(text);
      setText("");
    } else {
      setAlert("Please enter something", "light");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          name="text"
          placeholder="Search Users..."
          value={text}
        />
        <button type="submit" className="btn btn-dark btn-block">
          Search
        </button>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block my-1" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  alertHandler: PropTypes.func.isRequired,
};

export default Search;
