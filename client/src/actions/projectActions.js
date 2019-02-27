import axios from "axios";

import {
  ADD_PROJECT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_PROJECTS,
  GET_PROJECT,
  PROJECTS_LOADING,
  DELETE_PROJECT
} from "./types";

// Add Project or a Group
export const addProject = projectData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/project", projectData)
    .then(res =>
      dispatch({
        type: ADD_PROJECT,
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

// Get all projects for user
export const getProjects = () => dispatch => {
  dispatch(setProjectsLoading());
  axios
    .get("/api/project")
    .then(res =>
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECTS,
        payload: null
      })
    );
};

// Get a Project by id
export const getProject = id => dispatch => {
  dispatch(setProjectsLoading());
  axios
    .get(`/api/project/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECT,
        payload: null
      })
    );
};

// Delete Project
export const deleteProject = id => dispatch => {
  axios
    .delete(`/api/project/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PROJECT,
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
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
