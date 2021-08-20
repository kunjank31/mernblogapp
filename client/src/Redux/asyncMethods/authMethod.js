import {
  REGISTER_ERROR,
  SET_LOADER,
  CLOSE_LOADER,
  SET_TOKEN,
  LOGIN_ERROR,
} from "../type/authType";
import { axiosInstance } from "../../config";

export const postRegister = (state) => {
  //   const history = useHistory();
  return async (dispatch) => {
    const config = {
      "Content-type": "application/json",
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axiosInstance.post(
        "/api/user/register",
        state,
        config
      );
      console.log(data);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
    } catch (error) {
      console.log(error);
      dispatch({ type: REGISTER_ERROR, payload: error.response.data.message });
      dispatch({ type: CLOSE_LOADER });
      //   console.log(error.data.error);
    }
  };
};

export const postLogin = (state) => {
  return async (dispatch) => {
    const config = {
      "Content-type": "application/json",
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axiosInstance.post(
        "/api/user/login",
        state,
        config
      );
      console.log(data);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
      dispatch({ type: CLOSE_LOADER });
    }
  };
};
