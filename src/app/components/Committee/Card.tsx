import styles from "./styles.module.css";

interface CardProps {
  imageSrc: string;
  textHeader: string;
  textSubHeader1: string;
  textSubHeader2?: string;
}
export const Card: React.FC<CardProps> = ({
  imageSrc,
  textHeader,
  textSubHeader1,
  textSubHeader2,
}) => {
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
};

const CardImage: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={imageSrc} alt="" />
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
