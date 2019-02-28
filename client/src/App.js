import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Instance from "./components/instance/Instance";
import Tutorials from "./components/tutorials/Tutorials";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import CreateProject from "./components/create-project/CreateProject";
//import CreateInstance from "./components/instance/CreateInstance";
import CreateApplication from "./components/create-application/CreateApplication";

import NotFound from "./components/not-found/NotFound";

import "@progress/kendo-theme-default/dist/all.css";
import "./iterate.css";
import "./style.css";
import "./sb-admin-2.css";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="wrapper">
              <Sidebar />
              <div className="content-wrapper d-flex flex-column">
                <div className="content">
                  <Navbar />
                  <Route exact path="/not-found" component={NotFound} />
                  <Route exact path="/" component={Landing} />
                  <div className="container-fluid">
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                       
                        path="/create-application/:id"
                        component={CreateApplication}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/create-project"
                        component={CreateProject}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/create-profile"
                        component={CreateProfile}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/edit-profile"
                        component={EditProfile}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        path="/instance/:projId/:id"
                        component={Instance}
                      />
                    </Switch>
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/tutorials"
                        component={Tutorials}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
              <div />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
