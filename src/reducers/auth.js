import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT
} from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        users: [...state.users, action.payload]
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
