import jwt_decode from "jwt-decode";
import {
  REGISTER_ERROR,
  SET_LOADER,
  CLOSE_LOADER,
  SET_TOKEN,
  USER_LOGOUT,
  LOGIN_ERROR,
} from "../type/authType";

const initialState = {
  loading: false,
  registerError: [],
  loginError: [],
  token: "",
  users: "",
};
const verifyToken = (token) => {
  const decoded = jwt_decode(token);
  const expired = new Date(decoded.exp * 1000);
  if (new Date() > expired) {
    localStorage.removeItem("myToken");
    return null;
  } else {
    return decoded;
  }
};
const token = localStorage.getItem("myToken");
if (token) {
  const decoded = verifyToken(token);
  if (decoded) {
    initialState.token = token;
    const { user } = decoded;
    initialState.users = user;
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: true,
      };
    case CLOSE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
      };
    case SET_TOKEN:
      const decoded = verifyToken(action.payload);
      const { user } = decoded;
      return {
        ...state,
        token: action.payload,
        registerError: [],
        loginError: [],
        users: user,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: "",
        users: "",
        registerError: [],
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
