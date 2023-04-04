import React from "react";
import styles from "./Card.module.css";

const BuyEth = () => {
  const buyEth = [
    "Choose amount",
    "Choose payment method",
    "Complete KYC details",
    "Complete ID verification",
    "Purchase BNB",
  ];
  return (
    <div className={`${styles.cardContainer}  ${styles.buyBnb}`}>
      <h4 className={styles.cardTitle}>BUY $BNB Here</h4>
      <div className={styles.card}>
        <div className={styles.textContaner}>
          {buyEth.map((el, i) => (
            <p className={[styles.value, styles.list].join(" ")} key={i}>
              <span>{i + 1}.</span> {el}
            </p>
          ))}
        </div>
        <button className={`${styles.button} ${styles.buyButton} `}>Buy</button>
      </div>{" "}
    </div>
  );
};

export default BuyEth;
