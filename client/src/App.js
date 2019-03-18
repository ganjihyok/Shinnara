import React, { Component } from "react";
import styles from "./App.module.css";
import axios from "axios";

//components
import SignupModule from "./components/signupModule/SignupModule";
import LoginModule from "./components/loginModule/LoginModule";

class App extends Component {
  constructor() {
    super();

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

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <SignupModule signUp={this.signUp} />
        <LoginModule logIn={this.logIn} />
      </div>
    );
  }
}

export default App;
