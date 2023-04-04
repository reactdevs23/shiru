import React from "react";
import BuyEth from "./Card/BuyBnb";
import EthCard from "./Card/BnbCard";
import styles from "./styles.module.css";
import UsdtCard from "./Card/UsdtCard";

const Purchase = () => {
  return (
    <div className={styles.purchasingContainer}>
      <h3 className={styles.title}>PURCHASE $SHIRU</h3>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Connect Wallet</button>{" "}
        <button className={styles.button}>Claimable Balance: 0 SHIRU</button>
      </div>

      <div className={styles.cardContainer}>
        <UsdtCard />
        <EthCard />

        <BuyEth />
      </div>
    </div>
  );
};

export default Purchase;
