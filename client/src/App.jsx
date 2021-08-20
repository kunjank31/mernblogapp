import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Single from "./Components/SinglePage";
import Blog from "./Components/Blog";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Write from "./Components/Write";
import { Provider } from "react-redux";
import Store from "./Redux";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import RouteLinks from './private/PrivateLinks'
import Error404 from "./Components/Error404";
import EditPage from "./Components/EditPost";
import ChangePassword from "./Components/ChangePassword";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      <RouteLinks exact path="/register" component={Register} />
      <RouteLinks exact path="/login" component={Login} />
      <Route exact path="/blog/:id" component={Single} />
      <PrivateRoute exact path="/post" component={Write} />
      <PrivateRoute exact path="/edit/:id" component={EditPage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/dashboard/password" component={ChangePassword} />
      <Route component={Error404}/>
    </Switch>
  );
};

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Routing />
        <Footer />
      </Provider>
    </>
  );
};
export default App;
