import { assetUrl } from "../../../../assets/data/assetUrl";
import { CSSProperties } from "react";
import { BankDetails, RegisterButton, TableBody } from "./RegistrationUI";

const RegistrationPageMain = () => {
  const jsStyles = dynamicStyles();
  return (
    <div style={jsStyles.mainContainer}>
      <h2 style={jsStyles.header}>REGISTRATION FEES</h2>
      <TableBody />
      <BankDetails/>
      <RegisterButton />
    </div>
  );
};

export default RegistrationPageMain;

const dynamicStyles = (): { [key: string]: CSSProperties } => {
  return {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${assetUrl.welcomeGradiant})`,
      backgroundRepeat: "round",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, Helvetica, sans-serif",
      marginTop: "3%",
      color: "white",
    },
  };
};
