import { Link } from "react-router-dom";
import styles from "./modal.module.css";
interface toggleType {
  toggleModal: () => void;
}

const NavBarModal: React.FC<toggleType> = ({ toggleModal }) => {
  return (
    <div className={styles.modalOverlay} onClick={toggleModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Link to={"/home"} className={styles.modalLink} onClick={toggleModal}>
          Home
        </Link>
        <Link
          to={"/committee"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Committee
        </Link>
        <Link
          to={"/programme"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Programme
        </Link>
        <Link
          to={"/registration"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Registration
        </Link>
        <Link
          to={"/contact"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Contact
        </Link>
        <Link to={""} className={styles.modalLink} onClick={toggleModal}
        style={{border: "1px solid #28a745", color:"#28a745"}}
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default NavBarModal;
