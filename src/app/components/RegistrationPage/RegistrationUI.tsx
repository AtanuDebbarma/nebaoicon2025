import React, { useEffect, useState } from "react";
import useWindowSize from "../../../../utils/FindWindowSize";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { assetUrl } from "../../../assets/data/assetUrl";
import styles from "../HomeComponents/AboutEvent/aboutEvent.module.css";
import styles2 from "./regUI.module.css";
import { ClipLoader } from "react-spinners";

export const TableBody: React.FC = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);

  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = assetUrl.table;

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [imgSrc]);

  return (
    <div style={jsStyles.tableContainer}>
      {isLoading ? (
        <div style={jsStyles.clipLoader}>
          <ClipLoader size={50} color="#FF4800" />
        </div>
      ) : (
        <img
          src={assetUrl.table}
          style={jsStyles.tableImage}
          alt="Nebaoicon2025 Registration Fees"
        />
      )}
    </div>
  );
};
export const BankDetails: React.FC = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.headerWrapper} style={jsStyles.headerWrapper}>
          <h4>BANK DETAILS</h4>
        </div>
        <div className={styles2.detailsContainer}>
          <div
            className={styles.paragraphWrapper}
            style={jsStyles.paragraphWrapper}
          >
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
          <div style={jsStyles.qrWrapper}>
            <span className={styles2.qrCode}>
              UPI ID: associationofotolaryngologist@sbi
            </span>
            <img
              src={assetUrl.QRCode}
              className={styles2.qrImage}
              alt="AOI-TSB Bank QR Code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
type ButtonProps = {
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  form: boolean;
};
export const RegisterButton: React.FC<ButtonProps> = ({
  marginTop,
  marginBottom,
  padding,
  form = false,
}) => {
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
    <div
      style={{
        ...jsStyles.buttonContainer,
        marginTop: marginTop || "0%",
        marginBottom: marginBottom || "5%",
      }}
    >
      <Link
        to={form ? "/registration_form" : "/registration"}
        style={{
          ...jsStyles.button,
          padding: padding || "0px 15px",
          backgroundColor: isPressed
            ? "#1e7e34"
            : isHovered
            ? form
              ? "#218838" // Darker green for hover when form is true
              : "#d93f02" // Darker orange for hover when form is false
            : form
            ? "#28a745" // Green when form is true
            : "#ff4800", // Orange when form is false
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
        <p>{form ? "Register Now" : "Registration Fees"}</p>
      </Link>
    </div>
  );
};

const dynamicStyles = (
  deviceWidth: number
): { [key: string]: CSSProperties } => {
  return {
    headerWrapper: {
      justifyContent: deviceWidth > 780 ? "flex-start" : "center",
      alignItems: deviceWidth > 780 ? "flex-start" : "center",
      marginLeft: deviceWidth > 780 ? "2%" : "0%",
    },
    tableContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tableImage: {
      width: deviceWidth > 700 ? "80%" : "86%",
      objectFit: "contain",
      marginBottom: "10%",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#28a745",
      textDecoration: "none",
      color: "white",
      borderRadius: "6px",
      textAlign: "center",
      transition: "background-color 0.3s ease, transform 0.1s ease",
    },
    paragraphWrapper: {
      marginLeft: deviceWidth > 780 ? "1%" : "10%",
      width: "50%",
    },
    qrWrapper: {
      display: "flex",
      flexDirection: "column",
      width: deviceWidth > 780 ? "50%" : "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    clipLoader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "80%",
      marginBottom: "110%",
    },
  };
};
