import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "./PresaleCalculator.module.css";

const PresaleCalculator = () => {
  const [stage, setStage] = useState(0);
  const [showStages, setShowStages] = useState(false);
  const [usd, setUsd] = useState(0);
  const [shiru, setShiru] = useState(0.0);

  const stages = [1, 2, 3, 4];
  useEffect(() => {
    setShiru(usd * 1);
  }, [usd]);
  return (
    <div className={styles.presaleCalculator}>
      <h4 className={styles.cardTitle}>Private Sale CALCULATOR</h4>
      <div className={styles.card}>
        <div>
          <p className={styles.text}>1. Select a Private Sale Stage:</p>
          <div className={styles.stageContainer}>
            <p className={styles.stage}>{stage}</p>
            {showStages && (
              <div className={styles.stages}>
                {stages.map((el, i) => (
                  <p
                    className={styles.stage}
                    key={i}
                    onClick={() => {
                      setStage(el);
                      setShowStages(false);
                    }}
                  >
                    {el}
                  </p>
                ))}
              </div>
            )}
            {showStages ? (
              <IoIosArrowUp
                className={styles.arrow}
                onClick={() => setShowStages((prev) => !prev)}
              />
            ) : (
              <IoIosArrowDown
                className={styles.arrow}
                onClick={() => setShowStages((prev) => !prev)}
              />
            )}
          </div>{" "}
        </div>
        <div className={`${styles.inputWrapper}`}>
          <p className={styles.text}>2. Select a Private Sale Stage:</p>
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

        <div className={`${styles.inputWrapper}`}>
          <p className={styles.text}>3. Enter your Amount:</p>
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
        <div>
          <p className={styles.text}>4. Compare the Stages:</p>
          <button className={styles.button}> Approve</button>
        </div>
      </div>
    </div>
  );
};

export default PresaleCalculator;
