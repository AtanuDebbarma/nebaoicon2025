import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../formUi.module.css";
import { assetUrl } from "../../../../../assets/data/assetUrl";
import { Link } from "react-router-dom";

export const GeneralInstructions = () => {
  return (
    <div className={styles.generalInstructionsContainer}>
      <span className={styles.formHeader}>GENERAL INSTRUCTIONS</span>
      <span className={styles.instructionsH6Span}>
        <FontAwesomeIcon icon={assetUrl.rightArrow} />
        <h6>
          &nbsp; Filled up form submission is mandatory to consider completion
          of registration process.
        </h6>
      </span>
      <span className={styles.instructionsH6Span} style={{ marginTop: "3%" }}>
        <FontAwesomeIcon icon={assetUrl.rightArrow} />
        <h6>&nbsp; How to register</h6>
      </span>
      <span className={styles.instructionsPoints}>
        <strong>BANK DETAILS:</strong>
      </span>
      <p className={styles.instructionsPoints}>
        Name : Association of Otolaryngologists of India Tripura State Branch.
        <br />
        A/C No. : 30100114308
        <br />
        Bank Name : State Bank of India <br />
        IFSC Code :SBIN0004545 <br />
        Branch : Kunjaban
      </p>
      <span className={styles.instructionsPoints}>
        1. Make payment to the above bank account online or offline.
      </span>
      <span className={styles.instructionsPoints}>
        2. Get the Transaction ID
      </span>
      <span className={styles.instructionsPoints}>
        3. Fill out the form with your details and Transaction ID from the
        payment receipt.
      </span>
      <span className={styles.instructionsH6Span}>
        <FontAwesomeIcon icon={assetUrl.rightArrow} />
        <h6>&nbsp; Cancellation Policy</h6>
      </span>
      <span className={styles.instructionsPoints}>
        1. Delegates must inform in written to start cancellation process.
      </span>
      <span className={styles.instructionsPoints}>
        2. 25% registration money will be deducted if cancelled on or before
        30th of June 2025, 50% will be deducted on cancellation on or before
        31st August 2025.
      </span>
      <span className={styles.instructionsPoints}>
        3. No refund will be made on cancellation after 31st of August 2025.
      </span>
      <Link
        to={"/registration"}
        className={styles.instructionsH6Span}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FontAwesomeIcon icon={assetUrl.rightArrow} />
        <h6 style={{ color: "blue", marginLeft:"1%"}} >Registration Fee Details</h6>
      </Link>
    </div>
  );
};
