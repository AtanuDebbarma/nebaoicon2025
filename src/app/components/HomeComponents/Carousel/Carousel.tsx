import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.css";
import { assetUrl } from "../../../../../assets/data/assetUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={onClick}>
      <div className={styles.arrowImageWrapperLeft}>
        <FontAwesomeIcon
          icon={assetUrl.leftArrow}
          className={styles.arrowIcon}
        />
      </div>
    </button>
  );
};

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      className={`${styles.arrow} ${styles.rightArrow}`}
      onClick={onClick}
    >
      <div className={styles.arrowImageWrapperRight}>
        <FontAwesomeIcon
          icon={assetUrl.rightArrow}
          className={styles.arrowIcon}
        />
      </div>
    </button>
  );
};

const CustomCarousel: React.FC = () => {
  const images: string[] = [
    assetUrl.Image1,
    assetUrl.Image2,
    assetUrl.Image3,
    assetUrl.Image4,
    assetUrl.Image5,
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
