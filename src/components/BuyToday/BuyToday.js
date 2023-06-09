import React from "react";

import {
  logo,
  sslSecured,
  copyRight,
  contract,
  secured,
} from "../../images/images";
import "./style.css";
import styles from "./BuyToday.module.css";

const BuyToday = () => {
  const facility = [copyRight, sslSecured, contract, secured];
  return (
    <div className={styles.buyToday}>
      <div className={styles.logoContainer}>
        {facility.map((el, i) => (
          <img
            src={el}
            alt="#"
            key={i}
            className={`${styles.facility} facility${i + 1}`}
          />
        ))}
      </div>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>BUY</h4>
        <img src={logo} alt="#" className={styles.logo} />
        <h4 className={styles.title}>TODAY</h4>
      </div>
      <div className={styles.buttonContainer}>
        <a href="#/" target="_blank" rel="noreferrer" className={styles.button}>
          Whitepaper
        </a>
        <a href="#/" target="_blank" rel="noreferrer" className={styles.button}>
          How to Buy
        </a>
      </div>
    </div>
  );
};

export default BuyToday;
