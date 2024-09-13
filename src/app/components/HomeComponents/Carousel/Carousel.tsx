import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import NebaoiconImage1 from "../../../../assets/Carousel_temp1.png";
import NebaoiconImage2 from "../../../../assets/2nd_carousel_temp.png";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const images: string[] = [NebaoiconImage1, NebaoiconImage2];

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.carouselTrack} ${
          !isTransitioning ? styles.noTransition : ""
        }`}
        style={{
          transform: `translateX(-${
            (currentIndex % (images.length + 1)) * 100
          }%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index + 1}`}
            className={styles.carouselImage}
          />
        ))}
        <img
          src={images[0]}
          alt={`Carousel Clone`}
          className={styles.carouselImage}
        />
      </div>
    </div>
  );
};

export default Carousel;
