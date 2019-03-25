import React, { Component } from "react";
import axios from "axios";
import { CSSTransitionGroup } from "react-transition-group";
import styles from "./HomePage.module.css";

//components
import MainPage from "../mainPage/MainPage";
import NewsFeed from "../newsFeed/NewsFeed";
import SongList from "../songList/SongList";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      curPage: "MainPage"
    };

    this.fetchPosts = this.fetchPosts.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      curPage: page
    });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const { user } = this.props;
    axios
      .get("http://localhost:8000/api/posts", {
        headers: { authorization: `Token ${user.token}` }
      })
      .then(res => this.setState({ data: res.data.result }))
      .catch(err => console.log(err));
  }

  render() {
    const { curPage } = this.state;

    return (
      <div className={styles.wrapper}>
        <MainPage changePage={this.changePage} curPage={curPage} />
        <NewsFeed changePage={this.changePage} curPage={curPage} />
        <SongList changePage={this.changePage} curPage={curPage} />
      </div>
    );
  }
}

export default HomePage;
