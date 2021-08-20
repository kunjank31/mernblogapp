import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducer/authReducer";
import {
  comment,
  postDetails,
  fetchPosts,
  homePage,
  postReducer,
  fetchPost,
  postUpdate,
} from "./reducer/postReducer";
import { updatePassword } from "./reducer/profileReducer";

const reducers = combineReducers({
  Auth: authReducer,
  Post: postReducer,
  FetchPosts: fetchPosts,
  PostDetails: postDetails,
  FetchPost: fetchPost,
  HomePage: homePage,
  Comment: comment,
  PostUpdate: postUpdate,
  ChangePassword: updatePassword,
});

const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default Store;
