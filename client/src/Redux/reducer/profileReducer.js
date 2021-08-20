import {
  SET_LOADER,
  CLOSE_LOADER,
  CHANGE_PASSWORD,
  ERROR,
} from "../type/profileType";
const initialState = {
  loading: false,
  msg: "",
};

export const updatePassword = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        msg: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        msg: payload,
      };
    default:
      return state;
  }
};
