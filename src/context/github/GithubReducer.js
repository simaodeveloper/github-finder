import {
  FETCH_USER_REPOS,
  FETCH_USERS,
  FETCH_USER,
  SET_LOADING,
  CLEAR_USERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCH_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
