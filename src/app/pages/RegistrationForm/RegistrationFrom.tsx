import { CSSProperties } from "react";
import { FormMain } from "../../components/Form/FormMain";

const RegistrationFrom:React.FC = () => {
    const jsStyles = dynamicStyles();
  return (
    <div style={jsStyles.mainContainer}> 
      <FormMain/>
    </div>
  )
}

export default RegistrationFrom


const dynamicStyles = (): { [key: string]: CSSProperties } => {
    return {
      mainContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
    };
  };
  