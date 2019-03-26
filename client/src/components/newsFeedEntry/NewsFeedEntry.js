import React, { useState } from "react";
import styles from "./NewsFeedEntry.module.css";

export default function NewsFeedEntry({ data }) {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profilePicContainer}>
        <img
          className={styles.profilePic}
          src={data.ownerId.profilePic}
          alt="profilePic"
        />
      </div>
      <div className={styles.ownerUsername}>{data.ownerId.username}</div>
      <div className={styles.content}>{data.content}</div>
    </div>
  );
}
