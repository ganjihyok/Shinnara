import React, { Component } from "react";
import axios from "axios";
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    this.fetchPosts = this.fetchPosts.bind(this);
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
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        {data.map(post => (
          <div>{post.content}</div>
        ))}
      </div>
    );
  }
}

export default HomePage;
