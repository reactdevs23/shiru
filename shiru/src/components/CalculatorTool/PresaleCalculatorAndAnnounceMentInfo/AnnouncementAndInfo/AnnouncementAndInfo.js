import React from "react";
import styles from "./AnnouncementAndInfo.module.css";
import { copy } from "../../../../images/images";

const AnnouncementAndInfo = () => {
  return (
    <div className={styles.announceMent}>
      <h4 className={styles.cardTitle}>Announcements & Info</h4>
      <div className={styles.card}>
        <div className={styles.buttonContainer}>
          <a
            href="#/"
            target="_blank"
            className={[styles.button, styles.telegramButton].join(" ")}
          >
            Telegram
          </a>
          <a href="#/" target="_blank" className={styles.button}>
            Discord
          </a>
        </div>
        <p className={styles.text}>
          Contract addresses for information purpose only. See our How to Buy
          SHIRU guide to purchase.
        </p>
        <div className={styles.addressContainer}>
          <div>
            <p className={[styles.addressTitle, styles.address].join(" ")}>
              BETA SALE CONTRACT
            </p>
            <p className={styles.address}>0x5f95fE0Dbd6CBD03AF...</p>
          </div>
          <div className={styles.iconContainer}>
            <img src={copy} alt="#" className={styles.copy} />
          </div>
        </div>{" "}
        <div className={styles.addressContainer}>
          <div>
            <p className={[styles.addressTitle, styles.address].join(" ")}>
              BETA SALE CONTRACT
            </p>
            <p className={styles.address}>0x5f95fE0Dbd6CBD03AF...</p>
          </div>
          <div className={styles.iconContainer}>
            <img src={copy} alt="#" className={styles.copy} />
          </div>
        </div>{" "}
        <div className={styles.addressContainer}>
          <div>
            <p className={[styles.addressTitle, styles.address].join(" ")}>
              BETA SALE CONTRACT
            </p>
            <p className={styles.address}>0x5f95fE0Dbd6CBD03AF...</p>
          </div>
          <div className={styles.iconContainer}>
            <img src={copy} alt="#" className={styles.copy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementAndInfo;
