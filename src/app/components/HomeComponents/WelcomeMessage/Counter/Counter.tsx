import styles from "../welcomeMessage.module.css";

const Counter: React.FC = () => {
  return (
    <div className={styles.counterContainer}>
      <div className={styles.headingContainer}>
        <p>STARTS IN</p>
      </div>
      <div className={styles.timerContainer}>
        <div className={styles.timer}>
          <span>---</span>
          <span>DAYS</span>
        </div>
        <div className={styles.timer}>
          <span>---</span>
          <span>HOURS</span>
        </div>
        <div className={styles.timer}>
          <span>---</span>
          <span>MINUTES</span>
        </div>
        <div className={styles.timer}>
          <span>---</span>
          <span>SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
