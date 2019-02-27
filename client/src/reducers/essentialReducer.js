import {
  ADD_ESSENTIALS,
  GET_ESSENTIALS,
  GET_ESSENTIAL,
  DELETE_ESSENTIALS,
  ESSENTIALS_LOADING
} from "../actions/types";

const initialState = {
  essentials: [],
  essential: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ESSENTIALS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ESSENTIALS:
      return {
        ...state,
        essentials: action.payload,
        loading: false
      };
    case GET_ESSENTIAL:
      return {
        ...state,
        essential: action.payload,
        loading: false
      };
    case ADD_ESSENTIALS:
      return {
        ...state,
        essentials: [action.payload, ...state.essentials]
      };
    case DELETE_ESSENTIALS:
      return {
        ...state,
        essentials: state.posts.filter(
          essential => essential._id !== action.payload
        )
      };
    default:
      return state;
  }
}
