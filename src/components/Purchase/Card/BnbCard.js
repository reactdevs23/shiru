import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Bnd = () => {
  const [bnb, setBnb] = useState(0);
  const [shiru, setShiru] = useState(0);

  useEffect(() => {
    setShiru(bnb * 1);
  }, [bnb]);
  return (
    <div className={`${styles.cardContainer}  ${styles.bnbCard}`}>
      <h4 className={styles.cardTitle}>Trade With $BNB</h4>
      <div className={styles.card}>
        <div className={`${styles.inputWrapper}`}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={bnb}
              onChange={(e) => {
                setBnb(e.target.value);
              }}
            />{" "}
            <p className={styles.label}> BNB</p>
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
          {shiru} SHIRU = {bnb ? bnb : 0} BNB
        </p>{" "}
        <button className={`${styles.button} ${styles.buyButton} `}>Buy</button>
      </div>{" "}
    </div>
  );
};

export default Bnd;
