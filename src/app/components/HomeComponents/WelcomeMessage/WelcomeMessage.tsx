import { assetUrl } from "../../../../../assets/data/assetUrl";
import Counter from "./Counter/Counter";
import MessageSection from "./MessageSection/MessageSection";
import styles from "./welcomeMessage.module.css";

const WelcomeMessage: React.FC = () => {
  return (
    <div
      className={styles.messageContainer}
      style={{ backgroundImage: `url(${assetUrl.welcomeGradiant})` }}
    >
      <Counter />
      <MessageSection />
    </div>
  );
};

export default WelcomeMessage;
