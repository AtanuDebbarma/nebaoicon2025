import styles from "./topbanner.module.css";
import useWindowSize from "../../../../utils/FindWindowSize";
import { assetUrl } from "../../../assets/data/assetUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const TopBanner: React.FC = () => {
  const { width } = useWindowSize();
  const location = useLocation();
  const isForm = location.pathname === "/registration_form";
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = assetUrl.topBanner;

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setIsLoading(false);
  }, [imgSrc]);

  return (
    <div>
      <div
        className={styles.topContainer}
        style={{ backgroundImage: `url(${assetUrl.navbarBackground})` }}
      >
        <div className={styles.detailsContainer}>
          <FontAwesomeIcon
            icon={assetUrl.emailIcon}
            className={styles.Icon}
            style={{ marginRight: "2%" }}
          />
          <p style={{ marginRight: "5%" }}>nebaoicon.2025@gmail.com</p>
          <FontAwesomeIcon
            icon={assetUrl.phoneIcon}
            className={styles.Icon}
            style={{ marginRight: "2%" }}
          />
          <p>+91-9436132654</p>
        </div>
        {width <= 700 && !isForm ? (
          <Link to={"/registration_form"} className={styles.buttonContainer}>
            <button>Register Now</button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ff4800",
            backgroundColor: "white",
          }}
        >
          Loading...
        </div>
      ) : (
        <div className={styles.bannerContainer}>
          <img src={assetUrl.topBanner} />
        </div>
      )}
    </div>
  );
};

export default TopBanner;
