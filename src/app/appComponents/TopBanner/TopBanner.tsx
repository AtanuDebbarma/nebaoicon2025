import styles from "./topbanner.module.css";
import useWindowSize from "../../../../utils/FindWindowSize";
import { assetUrl } from "../../../../assets/data/assetUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBanner: React.FC = () => {
  const { width } = useWindowSize();

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
          <p style={{ marginRight: "5%" }}>12345xyz@xyz.com</p>
          <FontAwesomeIcon
            icon={assetUrl.phoneIcon}
            className={styles.Icon}
            style={{ marginRight: "2%" }}
          />
          <p>+91 1234567890</p>
        </div>
        {width <= 700 ? (
          <div className={styles.buttonContainer}>
            <button>Register Now</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.bannerContainer}>
        <img src={assetUrl.topBanner} />
      </div>
    </div>
  );
};

export default TopBanner;
