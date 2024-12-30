import useWindowSize from "../../../../utils/FindWindowSize";
import styles from "./footer.module.css";

const FooterMain = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);
  return (
    <div className={styles.footerContainer}>
      <div
        className={styles.addressContainer}
        style={jsStyles.addressContainer}
      >
        <div className={styles.addressWrapper} style={jsStyles.addressWrapper}>
          <p className={styles.addressHeader}>Conference Secretariat</p>
          <p className={styles.addressPara}>
            Dr. Bidhan Das
            <br />
            Organising Secretary NEBAOICON-2025
            <br />
            Tripura Medical College & Dr. BRAM Teaching Hospital,
            <br />
            Hapania, Agartala, Tripura, India
            <br />
            PIN: 799014
            <br />
            Phone: +91-9436132654
            <br />
            Email: nebaoicon.2025@gmail.com
          </p>
        </div>
        <div className={styles.addressWrapper}>
          <p className={styles.addressHeader}>Reach us</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.36936044113!2d91.26218810692951!3d23.788627945012006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f4c1835692cf%3A0x31334f2f52fb2e28!2sAgartala%20International%20Fair%20Ground%2C%20Hapania!5e0!3m2!1sen!2sin!4v1729518090876!5m2!1sen!2sin"
            width={width <= 700 ? "250" : "350"}
            height={width <= 700 ? "200" : "250"}
            style={{ border: 0, borderRadius: "6px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div
        className={styles.creatorFooterWrapper}
        style={{ marginTop: width <= 768 ? "5%" : "2%" }}
      >
        <p
          className={styles.addressPara}
          style={{ fontSize: width <= 700 ? "0.6em" : "1em" }}
        >
          Copyright ©2025 All rights reserved to Nebaoicon 2025
        </p>
      </div>
      <div
        className={styles.creatorFooterWrapper}
        style={{ flexDirection: "row", gap: "5px", marginTop: "0%" }}
      >
        <p
          className={styles.addressPara}
          style={{ fontSize: width <= 700 ? "0.6em" : "1em" }}
        >
          Created by -
        </p>
        <a
          href="https://www.linkedin.com/in/atanu-debbarma/"
          target="blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Atanu Debbarma
        </a>
        <span style={{ color: "#00e5ff" }}>|</span>
        <a
          href="https://github.com/AtanuDebbarma/"
          target="blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Github Link
        </a>
      </div>
    </div>
  );
};

export default FooterMain;

const dynamicStyles = (deviceWidth: number) => {
  return {
    addressContainer: {
      flexDirection:
        deviceWidth <= 768 ? "column" : ("row" as "column" | "row"),
    },
    addressWrapper: {
      width: deviceWidth <= 700 ? "90%" : ("40%" as "90%" | "40%"),
    },
  };
};
