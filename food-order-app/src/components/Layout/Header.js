import { Fragment } from "react";

import styles from "./Header.module.css";

import imageMeals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header }>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={imageMeals} alt="Table of delicious food " />
      </div>
    </Fragment>
  );
}
