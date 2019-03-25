import React, { Component } from "react";
import axios from "axios";
import styles from "./MainPage.module.css";

class MainPage extends Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { changePage } = this.props;
    changePage("MainPage");
  }

  render() {
    const { curPage } = this.props;
    return curPage === "MainPage" ? (
      <div className={styles.mainContainer}>
        <div>some content</div>
        this is MainPage!!!!!!!!
        <div>some content and doggy</div>
      </div>
    ) : curPage === "NewsFeed" ? (
      <div className={styles.thirdContainer} onClick={this.clickHandler}>
        MainPage not selected at the moment
      </div>
    ) : (
      <div className={styles.secondContainer} onClick={this.clickHandler}>
        MainPage not selected at the moment
      </div>
    );
  }
}

export default MainPage;
