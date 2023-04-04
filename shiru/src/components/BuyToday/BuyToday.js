import React from "react";
import styles from "./BuyToday.module.css";
import { logo } from "../../images/images";

const BuyToday = () => {
  const partners = [logo, logo, logo, logo];
  return (
    <div className={styles.buyToday}>
      <div className={styles.logoContainer}>
        {partners.map((el, i) => (
          <img src={el} alt="#" key={i} className={styles.partners} />
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
