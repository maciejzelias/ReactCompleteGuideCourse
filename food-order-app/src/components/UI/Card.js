import styles from "./Card.module.css";

import React from "react";

export default function Card(props) {
  return <div className={styles.card}>{props.children}</div>;
}
