import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

import { getUsersByUserName, getReposByLogin, getUserByLogin } from "../../api";

import {
  FETCH_USER_REPOS,
  FETCH_USERS,
  FETCH_USER,
  SET_LOADING,
  CLEAR_USERS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    repos: [],
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // fetchUserRepos
  const getUserRepos = async (login) => {
    setLoading();

    const repos = await getReposByLogin(login);

    dispatch({ type: FETCH_USER_REPOS, payload: repos });
  };

  // fetchUsers
  const fetchUsers = async (text) => {
    setLoading();

    const users = await getUsersByUserName(text);

    dispatch({ type: FETCH_USERS, payload: users });
  };

  // fetchUser
  const getUser = async (login) => {
    setLoading();

    const user = await getUserByLogin(login);

    dispatch({ type: FETCH_USER, payload: user });
  };

  // clearUsers
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // setLoading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchUsers,
        getUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
