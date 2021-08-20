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
const initalState = {
  loading: false,
  createError: [],
  posts: [],
  redirect: false,
  singlePost: {},
  postStatus: false,
  msg: "",
  homePagePost: [],
  comment: {},
  postUpdate: {},
};

export const postReducer = (state = initalState, action) => {
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
    case REDIRECT_TRUE:
      return {
        ...state,
        redirect: true,
      };
    case REDIRECT_FALSE:
      return {
        ...state,
        redirect: false,
      };
    case CREATE_ERROR:
      return {
        ...state,
        createError: payload,
      };
    default:
      return state;
  }
};

export const fetchPosts = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_FETCH_USER:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export const fetchPost = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SINGLE_POST:
      return {
        ...state,
        singlePost: payload,
      };
    case POST_STATUS:
      return {
        ...state,
        postStatus: true,
      };
    case POST_RESET:
      return {
        ...state,
        postStatus: false,
      };

    default:
      return state;
  }
};
export const postDetails = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_FETCH:
      return {
        ...state,
        singlePost: payload,
      };
    case POST_STATUS:
      return {
        ...state,
        postStatus: true,
      };
    case POST_RESET:
      return {
        ...state,
        postStatus: false,
      };

    default:
      return state;
  }
};
export const homePage = (state = initalState, action) => {
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
    case FETCH_POST:
      return {
        ...state,
        homePagePost: payload,
      };
    case POST_STATUS:
      return {
        ...state,
        postStatus: true,
      };
    case POST_RESET:
      return {
        ...state,
        postStatus: false,
      };

    default:
      return state;
  }
};
export const comment = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMMENT:
      return {
        ...state,
        comment: payload,
      };

    default:
      return state;
  }
};
export const postUpdate = (state = initalState, action) => {
  const { type } = action;
  switch (type) {
    case POST_UPDATE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
