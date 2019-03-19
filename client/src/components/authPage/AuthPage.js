import React from "react";
import styles from "./AuthPage.module.css";

//components
import SignupModule from "../signupModule/SignupModule";
import LoginModule from "../loginModule/LoginModule";

export default function AuthPage(props) {
  return (
    <div className={styles.mainContainer}>
      <SignupModule signUp={props.signUp} />
      <LoginModule logIn={props.logIn} guestLogin={props.guestLogin} />
    </div>
  );
}
