import axios from "axios";

import {
  ADD_ESSENTIALS,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ESSENTIALS,
  GET_ESSENTIAL,
  ESSENTIALS_LOADING,
  DELETE_ESSENTIALS
} from "./types";

// Add Essentials
export const addEssential = essentialData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/essentials", essentialData)
    .then(res =>
      dispatch({
        type: ADD_ESSENTIALS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
export const getEssentials = () => dispatch => {
  dispatch(setEssentialsLoading());
  axios
    .get("/api/essentials")
    .then(res =>
      dispatch({
        type: GET_ESSENTIALS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ESSENTIALS,
        payload: null
      })
    );
};

// Get Post
export const getEssential = id => dispatch => {
  dispatch(setEssentialsLoading());
  axios
    .get(`/api/essentials/${id}`)
    .then(res =>
      dispatch({
        type: GET_ESSENTIAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ESSENTIAL,
        payload: null
      })
    );
};

// Delete Essential
export const deleteEssentials = id => dispatch => {
  axios
    .delete(`/api/essentials/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ESSENTIALS,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setEssentialsLoading = () => {
  return {
    type: ESSENTIALS_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
