import Counter from "./Counter/Counter";
import styles from "./welcomeMessage.module.css";

const WelcomeMessage: React.FC = () => {
  return (
    <div className={styles.messageContainer}>
        <Counter/>
        <div className={styles.addressContainter}>
            <div className={styles.addressHeader} >Welcome Address</div>
        </div>
    </div>
  );
};

export default WelcomeMessage;
