import styles from "./contact.module.css";
import { assetUrl } from "../../../assets/data/assetUrl";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import useWindowSize from "../../../../utils/FindWindowSize";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = assetUrl.contactUsPhoto;
  const { width } = useWindowSize();

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [imgSrc]);

  return (
    <div className={styles.imageContainer}>
      <h1>Contact us</h1>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: width > 1024 ? "15%" : width > 500 ? "30%" : "35%",
            marginBottom: width > 1024 ? "10%" : "5%",
          }}
        >
          <ClipLoader size={50} color="#FF4800" />
        </div>
      ) : (
        <img src={imgSrc} className={styles.image} />
      )}
    </div>
  );
};

export default ContactUs;
