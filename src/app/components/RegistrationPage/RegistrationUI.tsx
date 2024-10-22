import React, { useState } from "react";
import { tableDataArray } from "../../../../data/tableData";
import useWindowSize from "../../../../utils/FindWindowSize";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

export const TableMain = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);

  return (
    <div style={jsStyles.tableContainer}>
      {tableDataArray.map((tableData, index) => (
        <TableBody key={index} tableData={tableData} />
      ))}
    </div>
  );
};

interface TableBodyProps {
  tableData: {
    title: string;
    rows: { label: string; value: string }[];
  };
}

export const TableBody: React.FC<TableBodyProps> = ({ tableData }) => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);

  return (
    <table style={jsStyles.table}>
      <thead style={jsStyles.thead}>
        <tr>
          <th style={jsStyles.th} colSpan={2}>
            {tableData.title}
          </th>
        </tr>
      </thead>
      <tbody style={jsStyles.tbody}>
        {tableData.rows.map((row, index) => (
          <tr key={index}>
            {/* Label column */}
            <td style={jsStyles.tdLabel}>{row.label}</td>
            {/* Value column */}
            <td style={jsStyles.tdValue}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
        to={""}
        style={{
          ...jsStyles.button,
          backgroundColor: isPressed
            ? "#1e7e34"
            : isHovered
            ? "#218838"
            : "#28a745",
          transform: isPressed ? "scale(0.95)" : "scale(1)",
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

const dynamicStyles = (deviceWidth: number): { [key: string]: CSSProperties } => {
  return {
    tableContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      marginTop: "5%",
      gap: deviceWidth <= 1024 ? "10px" : undefined,
    },
    table: {
      width: deviceWidth <= 1024 ? "80%" : "22%",
      minWidth: "250px",
      borderCollapse: "collapse",
      backgroundColor: "#e6e4e4",
      color: "black",
      marginBottom: "20px",
    },
    thead: {
      textAlign: "center",
      height: "90px",
      backgroundColor: "#0e1385",
      color: "white",
    },
    th: {
      padding: "10px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      border: "2px solid #007bff",
    },
    tbody: {
      fontWeight: "bolder",
    },
    tdLabel: {
      padding: "10px",
      textAlign: "left",
      width: "60%",
      border: "2px solid #007bff",
    },
    tdValue: {
      padding: "10px",
      textAlign: "left",
      width: "40%",
      border: "2px solid #007bff",
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
