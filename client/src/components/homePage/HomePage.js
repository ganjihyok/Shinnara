import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage(props) {
  //   const [email, setEmail] = useState("");

  return (
    <div className={styles.mainContainer}>{console.log(props.isLoggedIn)}</div>
  );
}
