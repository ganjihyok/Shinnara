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
      token: null
    };

    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  signUp(user) {
    axios
      .post("http://localhost:8000/api/users", { user })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data.errors);
      });
  }

  logIn(user) {
    axios
      .post("http://localhost:8000/api/users/login", { user })
      .then(res => {
        console.log(res);
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
    const { isLoggedIn } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/home"
            render={() => {
              if (isLoggedIn) {
                return <HomePage isLoggedIn={isLoggedIn} />;
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: "/auth"
                    }}
                  />
                );
              }
            }}
          />
          <Route exact path="/auth" component={AuthPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
