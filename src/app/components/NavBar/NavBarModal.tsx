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
          to={"/highlights"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Highlights
        </Link>
        <Link to={"/papers"} className={styles.modalLink} onClick={toggleModal}>
          Scientific Papers
        </Link>
        <Link
          to={"/registration"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Registration
        </Link>
        <Link
          to={"/gallery"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Gallery
        </Link>
        <Link
          to={"/contact"}
          className={styles.modalLink}
          onClick={toggleModal}
        >
          Contact
        </Link>
        <Link to={""} className={styles.modalLink} onClick={toggleModal}>
          Download Form
        </Link>
      </div>
    </div>
  );
};

export default NavBarModal;
