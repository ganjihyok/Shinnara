import React from "react";
import styles from "./AuthPage.module.css";

//components
import SignupModule from "../signupModule/SignupModule";
import LoginModule from "../loginModule/LoginModule";

export default function AuthPage(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <button className={styles.homeBtn} type="button">
          SHINNARA.
        </button>
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
