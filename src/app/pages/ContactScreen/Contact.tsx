import { useEffect } from "react";

import styles from "../../components/contactUs/contact.module.css";
import ContactUs from "../../components/contactUs/contactUs";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);
  return (
    <div className={styles.mainContainer}>
      <ContactUs />
    </div>
  );
};

export default Contact;
