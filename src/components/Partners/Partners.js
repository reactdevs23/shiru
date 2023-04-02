import React from "react";
import styles from "./Partners.module.css";

function App() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueGroup}>
          {row1.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.marqueGroup}>
          {row1.map((el, i) => (
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
