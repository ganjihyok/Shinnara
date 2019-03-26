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
      <div className={styles.thirdContainer}>
        <button
          className={styles.expandBtn}
          onClick={this.clickHandler}
          type="button"
        >
          <img
            className={styles.calendarIcon}
            src="https://cdn4.iconfinder.com/data/icons/rock-music-instruments/154/rock-band-drum-kit-music-512.png"
            alt="calendar"
          />
          <div className={styles.btnInfo}>
            <h2>HOME</h2>
            <div className={styles.divider} />
            <p>We. SHINNARA</p>
          </div>
        </button>
      </div>
    ) : (
      <div className={styles.secondContainer}>
        <button
          className={styles.expandBtn}
          onClick={this.clickHandler}
          type="button"
        >
          <img
            className={styles.calendarIconSmall}
            src="https://cdn4.iconfinder.com/data/icons/rock-music-instruments/154/rock-band-drum-kit-music-512.png"
            alt="calendar"
          />
        </button>
      </div>
    );
  }
}

export default MainPage;
