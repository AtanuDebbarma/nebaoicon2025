import { assetUrl } from "../../../../assets/data/assetUrl";
import styles from "./programme.module.css";

const Programme: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <h1>Programme:</h1>
        <h2>To Be Announced</h2>
        <img src={assetUrl.programPhoto} className={styles.image} />
      </div>
    </div>
  );
};

export default Programme;
