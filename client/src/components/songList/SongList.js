import React, { Component } from "react";
import axios from "axios";
import styles from "./SongList.module.css";

class SongList extends Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { changePage } = this.props;
    changePage("SongList");
  }

  render() {
    const { curPage } = this.props;

    return curPage === "SongList" ? (
      <div className={styles.mainContainer}>
        <div>some content</div>
        this is SongList!!!!!!!!
        <div>some content and doggy</div>
      </div>
    ) : curPage === "MainPage" ? (
      <div className={styles.thirdContainer}>
        <button
          className={styles.expandBtn}
          onClick={this.clickHandler}
          type="button"
        >
          <img
            className={styles.calendarIcon}
            src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/music-circle-blue-512.png"
            alt="calendar"
          />
          <div className={styles.btnInfo}>
            <h2>SONGS TO DO</h2>
            <div className={styles.divider} />
            <p>Be in. Get ready. Do play. TOGETHER</p>
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
            className={styles.calendarIcon}
            src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/music-circle-blue-512.png"
            alt="calendar"
          />
          <div className={styles.btnInfo}>
            <h2>SONGS TO DO</h2>
            <div className={styles.divider} />
            <p>Be in. Get ready. Do play. TOGETHER</p>
          </div>
        </button>
      </div>
    );
  }
}

export default SongList;
