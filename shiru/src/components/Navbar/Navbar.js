import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import styles from "./Navbar.module.css";
import { logo } from "../../images/images";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    { navItem: "How to Buy", to: "#" },
    { navItem: "Whitepaper", to: "#" },
    { navItem: "Audit", to: "#" },
    { navItem: "News", to: "#" },
    { navItem: "Video", to: "#" },
  ];
  return (
    <div className={styles.navbarContainer}>
      <img src={logo} alt="#" className={styles.mobileLogo} />
      <div className={[styles.navbar, sidebar && styles.sidebar].join(" ")}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
        </div>
        <div className={styles.navItems}>
          {navItems.map((el, i) => (
            <a
              href={el.to}
              target="_blank"
              rel="noreferrer"
              key={i}
              className={styles.navItem}
            >
              {el.navItem}
            </a>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Join Presale</button>{" "}
          <button className={[styles.button, styles.activeButton].join(" ")}>
            Connect Wallet
          </button>
        </div>
        {sidebar && (
          <MdOutlineClose
            className={styles.close}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
      </div>
      {!sidebar && (
        <RxHamburgerMenu
          className={styles.hamburger}
          onClick={() => setSidebar((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default Navbar;
