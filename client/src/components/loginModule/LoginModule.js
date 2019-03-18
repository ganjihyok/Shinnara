import React, { useState } from "react";
import styles from "./LoginModule.module.css";

export default function LoginModule(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };

    props.logIn(user);
  }

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
        <input type="submit" name="submit" value="Log in" />
      </form>
    </div>
  );
}
