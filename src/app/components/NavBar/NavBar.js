import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../../assets/tmp_logo.png";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <Link className={styles.logoContainer} to={"/home"}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </Link>
      <div className={styles.buttonContainer}>
        <Link className={styles.navButtons}>
          <h2 className={styles.navButtonText}>Home</h2>
        </Link>
        <Link className={styles.navButtons}>
          <h2 className={styles.navButtonText}>Highlights</h2>
        </Link>
        <Link className={styles.navButtons}>
          <h2 className={styles.navButtonText}>Scientific Papers</h2>
        </Link>
        <Link className={styles.navButtons}>
          <h2 className={styles.navButtonText}>Registration</h2>
        </Link>
        <Link className={styles.navButtons}>
          <h2 className={styles.navButtonText}>Gallery</h2>
        </Link>
        <Link className={styles.navButtons}>
          <h2 className={styles.navButtonText}>Contact</h2>
        </Link>
        <Link className={styles.downloadButtonWrapper}>
          <div className={styles.downloadButtonContainer}>
            <p className={styles.downloadButtonText}>Download Form</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
