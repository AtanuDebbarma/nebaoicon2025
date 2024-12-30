import { assetUrl } from "../../../../../assets/data/assetUrl";
import styles from "./aboutEvent.module.css";

const AboutEvent: React.FC = () => {
  return (
    <div
      className={styles.aboutContainer}
      style={{ backgroundImage: `url(${assetUrl.aboutGradiant})` }}
    >
      <div className={styles.aboutWrapper}>
        <div className={styles.headerWrapper}>
          <h4>ABOUT THE EVENT</h4>
        </div>
        <div className={styles.paragraphWrapper}>
          <p>
            36th Annual Conference of NEBAOI – 2025.
            <br />
            <br />
            Venue: International convention centre (Agartala international fair
            ground) , <br />
            Hapania, Agartala
            <br />
            Date: 14th - 15th November 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
