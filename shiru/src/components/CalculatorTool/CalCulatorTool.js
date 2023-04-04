import React from "react";
import styles from "./CalCulatorTool.module.css";
import PresaleCalculator from "./PresaleCalculatorAndAnnounceMentInfo/PresaleCaluculator/PresaleCalculator";
import AnnouncementAndInfo from "./PresaleCalculatorAndAnnounceMentInfo/AnnouncementAndInfo/AnnouncementAndInfo";

const CalCulatorTool = () => {
  return (
    <div className={styles.calculatorTool}>
      <div className={styles.header}>
        <h3 className={styles.title}>CALCULATOR TOOL</h3>
        <p className={styles.tagline}>
          Get your early bird tokens now! Use our calculator to compare stage
          prices and see how much you can gain!
        </p>
      </div>

      <div className={styles.calculatorAnnouncementAndInfo}>
        <PresaleCalculator />
        <AnnouncementAndInfo />
      </div>
    </div>
  );
};

export default CalCulatorTool;
