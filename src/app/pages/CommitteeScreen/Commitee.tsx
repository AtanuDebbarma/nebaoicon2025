import { CSSProperties } from "react";
import CommitteeContianer from "../../components/Committee/CommitteeContianer";
import { assetUrl } from "../../../assets/data/assetUrl";

const Committee: React.FC = () => {
  const jsStyles = dynamicStyles();
  return (
    <div style={jsStyles.mainContainer}>
      <CommitteeContianer/>
    </div>
  );
};

export default Committee;

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
  };
};
