import { axiosInstance } from "../../config";
import {
  SET_LOADER,
  CLOSE_LOADER,
  CHANGE_PASSWORD,
  ERROR,
} from "../type/profileType";
export const changePassword = (pass) => {
  return async (dispatch, getState) => {
    const {
      Auth: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axiosInstance.post(
        "/api/user/changepassword",
        pass,
        config
      );
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: CHANGE_PASSWORD, payload: data.msg });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: ERROR, payload: error.response.data.msg });
    }
  };
};
