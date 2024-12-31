import { useEffect } from "react";
import { assetUrl } from "../../../../assets/data/assetUrl";
import styles from "./contact.module.css";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);

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
