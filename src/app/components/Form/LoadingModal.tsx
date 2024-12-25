import styles from "./loadingModal.module.css";

interface PropTypes {
  message: string;
  success: boolean;
  phoneError?: string;
  transactionError?: string;
  otherError?: string;
}

const LoadingModal: React.FC<PropTypes> = ({
  message,
  success,
  phoneError,
  transactionError,
  otherError,
}) => {
  return (
    <div className={styles._modalOverlay}>
      <div className={styles.modalBody}>
        <div className={styles.modalContent}>
          <div className={styles.modalSpinner} />
          <h5
            style={{
              color:
                phoneError || transactionError || otherError
                  ? "red"
                  : success
                  ? "#28a745"
                  : "blue",
            }}
          >
            {message}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
