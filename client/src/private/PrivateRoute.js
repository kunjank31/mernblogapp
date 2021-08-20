import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const PrivateRoute = (props) => {
  const { users } = useSelector((state) => state.Auth);
  return users ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
