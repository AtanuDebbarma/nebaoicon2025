import React, { useState } from "react";
import useWindowSize from "../../../../utils/FindWindowSize";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { assetUrl } from "../../../../assets/data/assetUrl";
import styles from "../HomeComponents/AboutEvent/aboutEvent.module.css";

export const TableBody: React.FC = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);

  return (
    <div style={jsStyles.tableContainer}>
      <img src={assetUrl.table} style={jsStyles.tableImage} />
    </div>
  );
};
export const BankDetails: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.headerWrapper}>
          <h4>BANK DETAILS</h4>
        </div>
        <div className={styles.paragraphWrapper}>
          <p>
            Name : Association of Otolaryngologists of India Tripura State
            Branch.
            <br />
            A/C No. : 30100114308
            <br />
            Bank Name : State Bank of India
            <br />
            IFSC Code : SBIN0004545
            <br />
            Branch : Kunjaban
          </p>
        </div>
      </div>
    </div>
  );
};

export const RegisterButton = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);

  // State to handle hover and press effects
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Event handlers for hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  // Event handlers for press effect
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <div style={jsStyles.buttonContainer}>
      <Link
        to={"/registration_form"}
        style={{
          ...jsStyles.button,
          backgroundColor: isPressed
            ? "#1e7e34"
            : isHovered
            ? "#218838"
            : "#28a745",
          transform: isPressed ? "scale(0.95)" : "scale(1)",
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown} // For touch devices
        onTouchEnd={handleMouseUp} // For touch devices
      >
        <p>Register Now</p>
      </Link>
    </div>
  );
};

const dynamicStyles = (
  deviceWidth: number
): { [key: string]: CSSProperties } => {
  return {
    tableContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tableImage: {
      width: deviceWidth > 700 ? "80%" : "90%",
      objectFit: "contain",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "3%",
      marginBottom: "5%",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#28a745",
      textDecoration: "none",
      color: "white",
      padding: "0px 15px",
      borderRadius: "6px",
      textAlign: "center",
      transition: "background-color 0.3s ease, transform 0.1s ease",
    },
  };
};
