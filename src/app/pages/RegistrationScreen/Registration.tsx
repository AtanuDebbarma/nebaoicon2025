import RegistrationPageMain from "../../components/RegistrationPage/RegistrationPageMain";
import styles from "./registration.module.css";

const Registration: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <RegistrationPageMain/>
    </div>
  );
};

export default Registration;
