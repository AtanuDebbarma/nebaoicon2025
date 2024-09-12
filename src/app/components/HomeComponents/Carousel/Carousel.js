import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carouselContainer}>
        <img
          src={require("../../../../assets/nebaoicontemp.png")}
          alt="Carousel"
          className={styles.carouselImage}
        />
      </div>
    </div>
  );
};

export default Carousel;
