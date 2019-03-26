import React, { Component } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import styles from "./NewsFeed.module.css";

//components
import NewsFeedEntry from "../newsFeedEntry/NewsFeedEntry";

class NewsFeed extends Component {
  constructor() {
    super();

    this.state = {
      feed: [],
      loading: false
    };

    this.fetchFeed = this.fetchFeed.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  // componentDidMount() {
  //   this.fetchFeed();
  // }

  fetchFeed() {
    const { user } = this.props;
    this.setState({ loading: true });

    axios
      .get("http://localhost:8000/api/feed", {
        headers: { authorization: `Token ${user.token}` }
      })
      .then(res => {
        setTimeout(() => {
          this.setState({ feed: res.data.result, loading: false });
        }, 2000);
      })
      .catch(err => console.log(err));
  }

  clickHandler() {
    const { changePage } = this.props;
    this.fetchFeed();
    changePage("NewsFeed");
  }

  render() {
    const { feed, loading } = this.state;
    const { curPage } = this.props;

    return curPage === "NewsFeed" ? (
      <div className={styles.mainContainer}>
        {loading ? (
          <div className={styles.spinnerContainer}>
            <PacmanLoader color="#f8e9a1" />
          </div>
        ) : (
          <div className={styles.feedContainer}>
            {feed.map(item => {
              return <NewsFeedEntry data={item} />;
            })}
          </div>
        )}
      </div>
    ) : curPage === "SongList" ? (
      <div className={styles.thirdContainer}>
        <button
          className={styles.expandBtn}
          onClick={this.clickHandler}
          type="button"
        >
          <img
            className={styles.calendarIconSmall}
            src="calendar-512.png"
            alt="calendar"
          />
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
            src="calendar-512.png"
            alt="calendar"
          />
          <div className={styles.btnInfo}>
            <h2>BULLETIN BOARD</h2>
            <div className={styles.divider} />
            <p>We make noise ONLINE as well</p>
          </div>
        </button>
      </div>
    );
  }
}

export default NewsFeed;
