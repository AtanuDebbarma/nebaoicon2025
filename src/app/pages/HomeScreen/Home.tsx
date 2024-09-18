import Carousel from "../../components/HomeComponents/Carousel/Carousel";
import WelcomeMessage from "../../components/HomeComponents/WelcomeMessage/WelcomeMessage";
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <WelcomeMessage/>
    </div>
  );
};

export default Home;
