import {
  CLOSE_LOADER,
  COMMENT,
  CREATE_ERROR,
  FETCH_POST,
  GET_SINGLE_POST,
  POST_FETCH,
  POST_FETCH_USER,
  POST_RESET,
  POST_STATUS,
  POST_UPDATE,
  REDIRECT_FALSE,
  REDIRECT_TRUE,
  SET_LOADER,
} from "../type/postType";
import { axiosInstance } from "../../config";

export const newPost = (formData) => {
  return async (dispatch, getState) => {
    const {
      Auth: { token },
    } = getState();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      await axiosInstance.post("/api/blog/post", formData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_TRUE });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_FALSE });
      dispatch({ type: CREATE_ERROR, payload: error.response.data });
    }
  };
};

export const fetchPosts = (id) => {
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
      const { data } = await axiosInstance.get(`/api/blog/posts/${id}`, config);
      // console.log(data);
      dispatch({ type: POST_FETCH_USER, payload: data.posts });
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      console.log(error);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_FALSE });
      dispatch({ type: CREATE_ERROR, payload: error.response.data });
    }
  };
};

export const fetchPost = (id) => {
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
      const { data } = await axiosInstance.get(
        `/api/blog/singlepost/${id}`,
        config
      );
      console.log(data);
      dispatch({ type: GET_SINGLE_POST, payload: data.posts });
      dispatch({ type: POST_STATUS });
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      console.log(error);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_STATUS });
      dispatch({ type: CREATE_ERROR, payload: error.response.data });
    }
  };
};

export const postDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { posts, comment },
      } = await axiosInstance.get(`/api/blog/post/${id}`);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_FETCH, payload: posts });
      dispatch({ type: COMMENT, payload: comment });
      dispatch({ type: POST_STATUS });
    } catch (error) {
      console.log(error);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_RESET });
      dispatch({ type: CREATE_ERROR, payload: error.response });
    }
  };
};
export const homePage = () => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const data = await axiosInstance.get("/api/blog/posts");
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: FETCH_POST, payload: data.data });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
    }
  };
};

export const comment = (comment) => {
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
        "/user/comment",
        comment,
        config
      );
      dispatch({ type: COMMENT, payload: data });
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_FALSE });
      dispatch({ type: CREATE_ERROR, payload: error.response.data });
    }
  };
};

export const postUpdate = (editData) => {
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
      await axiosInstance.post(
        "/api/blog/update",
        editData,
        config
      );
      dispatch({ type: POST_UPDATE });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      dispatch({ type: REDIRECT_FALSE });
    }
  };
};
