import { useEffect, useState } from "react";
import styles from "./counter.module.css";

// Define the type for the timeLeft object
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

//component
const Counter: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-10-25T08:00:00");
    const currentTime = new Date();
    const difference = targetDate.getTime() - currentTime.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.counterContainer}>
      <div className={styles.headingContainer}>
        <p>STARTS IN</p>
      </div>
      <div className={styles.timerContainer}>
        <div className={styles.timer}>
          <span className={styles.digits}>{timeLeft.days}</span>
          <span className={styles.timerTitle}>DAYS</span>
        </div>
        <div className={styles.timer}>
          <span className={styles.digits}>{timeLeft.hours}</span>
          <span className={styles.timerTitle}>HOURS</span>
        </div>
        <div className={styles.timer}>
          <span className={styles.digits}>{timeLeft.minutes}</span>
          <span className={styles.timerTitle}>MINUTES</span>
        </div>
        <div className={styles.timer}>
          <span className={styles.digits}>{timeLeft.seconds}</span>
          <span className={styles.timerTitle}>SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
