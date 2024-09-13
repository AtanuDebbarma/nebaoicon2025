import styles from "./Carousel.module.css";
import NebaoiconLogo from "../../../../assets/nebaoicontemp.png";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carouselContainer}>
        <img
          src={NebaoiconLogo}
          alt="Carousel"
          className={styles.carouselImage}
        />
      </div>
    </div>
  );
};

export default Carousel;
