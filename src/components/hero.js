import React from "react";
import Img from "gatsby-image";

import styles from "./hero.module.css";

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={styles.heroDetails}>
      <h1 className={styles.heroHeadline}>{data.name}</h1>
      <h2 className={styles.heroTitle}>{data.title}</h2>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
);
