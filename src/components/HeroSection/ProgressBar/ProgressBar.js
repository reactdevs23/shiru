import React, { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./styles.module.css";
import { progressbarIcon } from "../../../images/images";

const ProgressBar = ({ progress, background }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: progressPercentage,
    background: background,
  };
  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);
  return (
    <div className={styles.progressbarContainer}>
      <div className={styles.checkmarkContainer}>
        <FiCheck className={styles.checkMark} />
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={progressStyle}>
          <IoIosArrowUp className={styles.arrow} />
        </div>
      </div>
      <div className={styles.iconContainer}>
        <img src={progressbarIcon} alt="#" className={styles.icon} />
      </div>
    </div>
  );
};

export default ProgressBar;
