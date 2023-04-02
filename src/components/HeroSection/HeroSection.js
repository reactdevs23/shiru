import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const totalRaised = 16385000;
  const currentValue = 14800880;

  return (
    <div className={styles.heroSection}>
      <h2 className={styles.title}>Private Sale $SHIRU</h2>
      <p className={styles.tagline}>12D 08H 44M 33S LEFT</p>

      <div className={styles.infoBox}>
        <ProgressBar progress={(currentValue / totalRaised) * 100} />
        <div className={styles.valueContainer}>
          <p className={styles.currentValueText}>
            <span className={[styles.text, styles.currently].join(" ")}>
              CURRENTLY:{" "}
            </span>{" "}
            <span>Private Sale</span>
          </p>
          <p className={styles.currentValue}>
            ${currentValue.toLocaleString()} /{" "}
            <span className={styles.totalRaised}>
              ${totalRaised.toLocaleString()}{" "}
              <span className={styles.totalRaisedText}>TOTAL RAISED</span>
            </span>
          </p>
        </div>
        <p className={styles.privateSale}>
          <span>Private Sale PRICE:</span> <span>0.008$ USDT = 1 $SHIRU</span>
        </p>
        <div className={styles.tokenNumber}>
          <p className={styles.text}> 1,075,794,021 TOKENS SOLD</p>{" "}
          <p className={styles.text}>79,205,979 REMAINING</p>
        </div>
      </div>
      <button className={styles.button}>Buy Tokens</button>
    </div>
  );
};

export default HeroSection;
