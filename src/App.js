import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import Alert from "./components/Layout/Alert";
import { Fragment } from "react";
import About from "./components/pages/About";
import User from "./components/user/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App you">
          <Navbar title="Github Finder" />
          <div className="container">
            <AlertState>
              <Alert />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Fragment>
                      <Search />

                      <Users />
                    </Fragment>
                  )}
                />
                <Route path="/about" component={About} />
                <Route
                  path="/user/:login"
                  render={(props) => <User {...props} />}
                />
              </Switch>
            </AlertState>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
