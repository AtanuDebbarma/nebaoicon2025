import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import useWindowSize from "../../../../utils/FindWindowSize";

const NavbarNormal: React.FC = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);
  const location = useLocation(); // Get the current location

  // Determine if the current path matches each link's path
  const isHomeActive =
    location.pathname === "/home" || location.pathname === "/";
  const isCommitteeActive = location.pathname === "/committee";
  const isProgrammeActive = location.pathname === "/programme";
  const isRegistrationActive = location.pathname === "/registration";
  const isContactActive = location.pathname === "/contact";
  const isForm = location.pathname === "/registration_form";

  return (
    <div className={styles.buttonContainer}>
      <Link
        to={"/home"}
        className={styles.navButtons}
        style={isHomeActive ? jsStyles.activeBorder : {}}
      >
        <h2 className={styles.navButtonText} style={jsStyles.linkText}>
          Home
        </h2>
      </Link>
      <Link
        to={"/committee"}
        className={styles.navButtons}
        style={isCommitteeActive ? jsStyles.activeBorder : {}}
      >
        <h2 className={styles.navButtonText} style={jsStyles.linkText}>
          Committee
        </h2>
      </Link>
      <Link
        to={"/programme"}
        className={styles.navButtons}
        style={isProgrammeActive ? jsStyles.activeBorder : {}}
      >
        <h2 className={styles.navButtonText} style={jsStyles.linkText}>
          Programme
        </h2>
      </Link>
      <Link
        to={"/registration"}
        className={styles.navButtons}
        style={isRegistrationActive ? jsStyles.activeBorder : {}}
      >
        <h2 className={styles.navButtonText} style={jsStyles.linkText}>
          Registration
        </h2>
      </Link>
      <Link
        to={"/contact"}
        className={styles.navButtons}
        style={isContactActive ? jsStyles.activeBorder : {}}
      >
        <h2 className={styles.navButtonText} style={jsStyles.linkText}>
          Contact
        </h2>
      </Link>
      {!isForm && (
        <Link
          to={"/registration_form"}
          className={styles.downloadButtonWrapper}
        >
          <p className={styles.downloadButtonText} style={jsStyles.linkText}>
            Register Now
          </p>
        </Link>
      )}
    </div>
  );
};

export default NavbarNormal;

const dynamicStyles = (deviceWidth: number) => {
  return {
    linkText: {
      fontSize: deviceWidth <= 1024 ? "16px" : "18px",
    },
    activeBorder: {
      borderRadius: "6px",
      backgroundColor: "rgba(224, 224, 224, 0.10)",
      borderBottom: "3px solid #00e5ff",
    },
  };
};
