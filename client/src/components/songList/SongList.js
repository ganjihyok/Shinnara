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
      <div className={styles.thirdContainer} onClick={this.clickHandler}>
        sl not selected at the moment
      </div>
    ) : (
      <div className={styles.secondContainer} onClick={this.clickHandler}>
        sl not selected at the moment
      </div>
    );
  }
}

export default SongList;
