
import styles from "./NavBar.module.css";
// import logo from "../../../assets/tmp_logo.png";
import useWindowSize from "../../utils/FindWindowSize";
import hamburger from "../../../assets/icons/hamburger.png";
import { useEffect, useState } from "react";
import NavbarNormal from "./NavbarNormal";
import NavBarModal from "./NavBarModal";

const NavBar: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const width = useWindowSize();
  useEffect(() => {
    setShowHamburger(width < 760);
  }, [width]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      className={styles.navBarContainer}
      style={width < 760 ? { justifyContent: "flex-start", height:"40px" } : {}}
    >
      {/* <Link
        className={styles.logoContainer}
        to={"/home"}
        style={width < 798 ? { marginLeft: "4%" } : {}}
      >
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </Link> */}
      {!showHamburger && <NavbarNormal />}

      {showHamburger && (
        <>
          <div
            className={styles.hamburgerContainer}
            onClick={toggleModal}
            style={{ marginLeft: "1%" }}
          >
            <img
              src={hamburger}
              alt="hamburger"
              className={styles.hamburgerImage}
            />
          </div>

          {isModalOpen && <NavBarModal toggleModal={toggleModal} />}
        </>
      )}
    </div>
  );
};

export default NavBar;
