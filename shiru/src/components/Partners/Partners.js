import React from "react";
import {
  invezz,
  crypto,
  blockonomy,
  tradingview,
  bloomberg,
  zycrypto,
} from "../../images/images";
import styles from "./Partners.module.css";

function App() {
  const partners = [
    invezz,
    crypto,
    blockonomy,
    tradingview,
    bloomberg,
    zycrypto,
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
      {/* <Marquee>
          <div className={styles.marqueGroup}>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </div>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee> */}
    </div>
  );
}

export default App;
