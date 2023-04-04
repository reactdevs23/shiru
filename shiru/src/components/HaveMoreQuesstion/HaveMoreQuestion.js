import React from "react";
import { BsTelegram } from "react-icons/bs";
import styles from "./HaveMoreQuestion.module.css";

const HaveMoreQuestion = () => {
  return (
    <div className={styles.haveMoreQuestion}>
      <h2 className={styles.title}>Have more Questions?</h2>
      <p className={styles.text}>
        Connect with us on our Telegram Community or email us on
      </p>
      <a
        href="mailto:info@shiruprotocol.com"
        className={[styles.text, styles.mail].join(" ")}
      >
        info@shiruprotocol.com.
      </a>
      <p className={[styles.text, styles.padding].join(" ")}>
        We are here to answer any questions you may have.
      </p>
      <a
        href="#/"
        target="_blank"
        rel="noreferrer"
        className={styles.iconContainer}
      >
        <BsTelegram className={styles.telegram} />
      </a>
    </div>
  );
};

export default HaveMoreQuestion;
