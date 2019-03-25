import React, { Component } from "react";
import axios from "axios";
import styles from "./NewsFeed.module.css";

class NewsFeed extends Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { changePage } = this.props;
    changePage("NewsFeed");
  }

  render() {
    const { curPage } = this.props;

    return curPage === "NewsFeed" ? (
      <div className={styles.mainContainer}>
        <div>some content</div>
        this is NewsFeed!!!!!!!!
        <div>some content and doggy</div>
      </div>
    ) : curPage === "SongList" ? (
      <div className={styles.thirdContainer} onClick={this.clickHandler}>
        NewsFeed not selected at the moment
      </div>
    ) : (
      <div className={styles.secondContainer} onClick={this.clickHandler}>
        NewsFeed not selected at the moment
      </div>
    );
  }
}

export default NewsFeed;
