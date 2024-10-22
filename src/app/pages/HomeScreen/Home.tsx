import AboutEvent from "../../components/HomeComponents/AboutEvent/AboutEvent";
import Carousel from "../../components/HomeComponents/Carousel/Carousel";
import WelcomeMessage from "../../components/HomeComponents/WelcomeMessage/WelcomeMessage";
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <WelcomeMessage/>
      <AboutEvent/>
    </div>
  );
};

export default Home;
