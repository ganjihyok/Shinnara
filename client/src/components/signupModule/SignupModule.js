import React, { useState } from "react";
import styles from "./SignupModule.module.css";

export default function SignupModule(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRePasswordChange(e) {
    setRePassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      username,
      password
    };

    props.signUp(user);
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.signupForm} onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          name="password"
          value={rePassword}
          placeholder="Re-enter password"
          onChange={handleRePasswordChange}
        />
        <input
          className={styles.signupBtn}
          type="submit"
          name="submit"
          value="Sign up"
        />
      </form>
    </div>
  );
}
