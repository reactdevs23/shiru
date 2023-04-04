import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

const UsdtCard = () => {
  const [usd, setUsd] = useState(0);
  const [shiru, setShiru] = useState(0);
  useEffect(() => {
    setShiru(usd * 1);
  }, [usd]);

  return (
    <div className={`${styles.cardContainer}  ${styles.usdtCard}`}>
      <h4 className={styles.cardTitle}>Buy with $USDT</h4>
      <div className={styles.card}>
        <div className={`${styles.inputWrapper}`}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={usd}
              onChange={(e) => {
                setUsd(e.target.value);
              }}
            />{" "}
            <p className={styles.label}> USD</p>
          </div>{" "}
        </div>
        <p className={styles.value}>
          {shiru} <span className={styles.valueText}>SHIRU</span>
        </p>
        <div className={`${styles.inputWrapper}`}>
          <div className={`${styles.inputContainer}`}>
            <input
              className={styles.input}
              min="0"
              type="number"
              value={shiru}
              onChange={(e) => setShiru(e.target.value)}
            />{" "}
            <p className={styles.label}> SHIRU</p>
          </div>{" "}
        </div>
        <p className={styles.value}>
          Your USDT balance : <span className={styles.valueText}>USDT</span>
        </p>
        <div className={styles.spaceBetween}>
          <p className={[styles.value, styles.reset].join(" ")}>Reset</p>
          <p className={styles.value}>
            {shiru} SHIRU = {usd ? usd : 0} USD
          </p>
        </div>
        <div className={`${styles.buttonWrapper}`}>
          <button className={` ${styles.approveButton} ${styles.button}  `}>
            {" "}
            Approve
          </button>
          <button className={`${styles.button} ${styles.buyButton} `}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsdtCard;
