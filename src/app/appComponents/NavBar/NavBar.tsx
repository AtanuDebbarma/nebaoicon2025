import styles from "./NavBar.module.css";
import useWindowSize from "../../../../utils/FindWindowSize";
import { useEffect, useState } from "react";
import NavbarNormal from "./NavbarNormal";
import NavBarModal from "./NavBarModal";
import { assetUrl } from "../../../assets/data/assetUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { width } = useWindowSize();
  useEffect(() => {
    setShowHamburger(width <= 700);
  }, [width]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      className={styles.navBarContainer}
      style={{
        justifyContent: width <= 700 ? "flex-start" : "center",
        height: width < 700 ? "50px" : "85px",
        backgroundImage: `url(${assetUrl.navbarBackground})`,
      }}
    >
      {!showHamburger && <NavbarNormal />}

      {showHamburger && (
        <>
          <div
            className={styles.hamburgerContainer}
            onClick={toggleModal}
            style={{ marginLeft: "1%" }}
          >
            <FontAwesomeIcon
              icon={assetUrl.hamburger}
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
