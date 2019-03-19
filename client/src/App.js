import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import axios from "axios";

//components
import HomePage from "./components/homePage/HomePage";
import AuthPage from "./components/authPage/AuthPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null
    };

    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  signUp(user) {
    axios
      .post("http://localhost:8000/api/users", { user })
      .then(res => {
        this.setState({
          isLoggedIn: true,
          user: res.user
        });
      })
      .catch(err => {
        console.log(err.response.data.errors);
      });
  }

  logIn(user) {
    axios
      .post("http://localhost:8000/api/users/login", { user })
      .then(res => {
        this.setState({
          isLoggedIn: true,
          user: res.user
        });
      })
      .catch(err => {
        console.log(err.response.data.errors);
      });
  }

  guestLogin() {
    axios
      .post("http://localhost:8000/api/users/guest")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data.errors);
      });
  }

  render() {
    const { isLoggedIn, user } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/home"
            render={() =>
              isLoggedIn ? (
                <HomePage isLoggedIn={isLoggedIn} user={user} />
              ) : (
                <Redirect to="/auth" />
              )
            }
          />
          <Route
            exact
            path="/auth"
            render={() =>
              isLoggedIn ? (
                <Redirect to="/home" />
              ) : (
                <AuthPage
                  signUp={this.signUp}
                  logIn={this.logIn}
                  guestLogin={this.guestLogin}
                />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
