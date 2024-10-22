import { assetUrl } from "../../../../assets/data/assetUrl";
import useWindowSize from "../../../../utils/FindWindowSize";
import { CSSProperties } from "react";
import { RegisterButton, TableMain } from "./RegistrationUI";

const RegistrationPageMain = () => {
  const { width } = useWindowSize();
  const jsStyles = dynamicStyles(width);
  return (
    <div style={jsStyles.mainContainer}>
      <h2 style={jsStyles.header}>REGISTRATION FEES</h2>
      <TableMain />
      <RegisterButton />
    </div>
  );
};

export default RegistrationPageMain;

const dynamicStyles = (
  deviceWidth: number
): { [key: string]: CSSProperties } => {
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
      marginTop: "5%",
      color: "white",
    },
  };
};
