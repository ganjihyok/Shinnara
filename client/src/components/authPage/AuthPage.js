import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";

//components
import SignupModule from "../signupModule/SignupModule";
import LoginModule from "../loginModule/LoginModule";

export default function AuthPage(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <Link className={styles.homeBtn} to="/home">
          SHINNARA.
        </Link>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src="output-onlinepngtools.png"
            alt="img"
          />
        </div>
        <div className={styles.slogan}>
          This is Shinnara <br />I will put something really awesome here
        </div>
      </div>
      <div className={styles.secondContainer}>
        <LoginModule logIn={props.logIn} guestLogin={props.guestLogin} />
      </div>
      <div className={styles.thirdContainer}>
        <SignupModule signUp={props.signUp} />
      </div>
    </div>
  );
}
