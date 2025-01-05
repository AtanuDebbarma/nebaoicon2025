import { useEffect, useState } from "react";
import { assetUrl } from "../../../assets/data/assetUrl";
import styles from "./programme.module.css";
import { ClipLoader } from "react-spinners";

const Programme: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = assetUrl.programPhoto;

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setIsLoading(false);
  }, [imgSrc]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <h1>Programme:</h1>
        <h2>To Be Announced</h2>
        {isLoading ? (
          <div className={styles.clipLoader}>
            <ClipLoader size={50} color="#ff4800" />
          </div>
        ) : (
          <img
            src={imgSrc}
            className={styles.image}
            alt="International convention centre (Agartala international fair ground)"
          />
        )}
      </div>
    </div>
  );
};

export default Programme;
