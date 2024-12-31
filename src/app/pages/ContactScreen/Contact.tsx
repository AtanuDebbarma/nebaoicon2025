import { assetUrl } from "../../../../assets/data/assetUrl";
import styles from "./contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <h1>Contact us</h1>
        <img src={assetUrl.contactUsPhoto} className={styles.image} />
      </div>
    </div>
  );
};

export default Contact;
