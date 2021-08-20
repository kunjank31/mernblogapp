import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const RouteLinks = (props) => {
  const { users } = useSelector((state) => state.Auth);
  return users ? (
    <Redirect to="/dashboard" />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};
export default RouteLinks;
