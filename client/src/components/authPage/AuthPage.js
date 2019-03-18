import React, { useState } from "react";
import styles from "./AuthPage.module.css";

//components
import SignupModule from "../signupModule/SignupModule";
import LoginModule from "../loginModule/LoginModule";

export default function AuthPage(props) {
  //   const [email, setEmail] = useState("");

  return (
    <div className={styles.mainContainer}>
      <SignupModule />
      <LoginModule />
    </div>
  );
}
