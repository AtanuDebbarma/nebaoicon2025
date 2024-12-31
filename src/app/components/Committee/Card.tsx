import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ClipLoader } from "react-spinners";
import useWindowSize from "../../../../utils/FindWindowSize";

interface CardProps {
  imageSrc: string;
  textHeader: string;
  textSubHeader1: string;
  textSubHeader2?: string;
}
export const Card: React.FC<CardProps> = React.memo(
  ({ imageSrc, textHeader, textSubHeader1, textSubHeader2 }) => {
    return (
      <div className={styles.cardContainer}>
        <CardImage imageSrc={imageSrc} />
        <CardText
          textHeader={textHeader}
          textSubHeader1={textSubHeader1}
          textSubHeader2={textSubHeader2}
        />
      </div>
    );
  }
);

const CardImage: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [imageSrc]);

  return (
    <div
      className={styles.imageContainer}
      style={{
        width: width > 600 ? "50%" : "70%",
      }}
    >
      {isLoading ? (
        <div
          className={styles.cardImage}
          style={{
            height:
              width > 850
                ? "200px"
                : width > 700
                ? "125px"
                : width > 400
                ? "100px"
                : "70px",
          }}
        >
          <ClipLoader size={20} color="#ff4800" />
        </div>
      ) : (
        <img
          src={imageSrc}
          alt="Committee Member"
          className={styles.cardImage}
        />
      )}
    </div>
  );
};

const CardText: React.FC<{
  textHeader: string;
  textSubHeader1: string;
  textSubHeader2?: string;
}> = ({ textHeader, textSubHeader1, textSubHeader2 }) => {
  return (
    <div className={styles.textContainer}>
      <span className={styles.textHeader}>{textHeader}</span>
      <span className={styles.textSubHeader}>{textSubHeader1}</span>
      <span className={styles.textSubHeader}>{textSubHeader2}</span>
    </div>
  );
};
