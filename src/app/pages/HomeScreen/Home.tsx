import Carousel from "../../components/HomeComponents/Carousel/Carousel";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
       <Carousel/>
    </div>
  );
};

export default Home;
