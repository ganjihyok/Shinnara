import React, { Component } from "react";
import styles from "./App.module.css";
import axios from "axios";

//components
import SignupModule from "./components/signupModule/SignupModule";

class App extends Component {
  constructor() {
    super();

    this.signUp = this.signUp.bind(this);
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
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <SignupModule signUp={this.signUp} />
      </div>
    );
  }
}

export default App;
