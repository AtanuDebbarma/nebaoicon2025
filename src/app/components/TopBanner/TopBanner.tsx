import styles from "./topbanner.module.css";
import phoneIcon from "../../../assets/icons/phone.png";
import emailIcon from "../../../assets/icons/mail.png";
import topBanner from "../../../assets/others/top_banner.png";

const TopBanner: React.FC = () => {
  return (
    <div>
      <div className={styles.topContainer}>
        <div className={styles.detailsContainer}>
          <img src={emailIcon} alt="email-icon" style={{ marginRight: "2%" }} />
          <p style={{ marginRight: "5%" }}>12345xyz@xyz.com</p>
          <img src={phoneIcon} alt="phone-icon" style={{ marginRight: "2%" }} />
          <p>+91 1234567890</p>
        </div>
        <div className={styles.buttonContainer}>
          <button>Register Now</button>
        </div>
      </div>
      <div className={styles.bannerContainer}>
        <img src={topBanner} />
      </div>
    </div>
  );
};

export default TopBanner;
