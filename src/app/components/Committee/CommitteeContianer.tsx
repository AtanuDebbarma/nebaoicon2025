import { CSSProperties } from "react";
import { assetUrl } from "../../../../assets/data/assetUrl";
import { Card } from "./Card";
import styles from "./styles.module.css";

const CommitteeContianer: React.FC = () => {
  const jsStyles = dynamicStyles();
  return (
    <div style={jsStyles.container}>
      <h2 className={styles.heading}>ORGANIZING COMMITTEE</h2>
      <Card
        imageSrc={
          "https://res.cloudinary.com/dyoefmx3t/image/upload/v1731177944/xxx_ikosij.png"
        }
        textHeader="Dr. Promotesh Roy"
        textSubHeader1="Patron"
      />
      <div style={jsStyles.row}>
        <Card
          imageSrc={
            "https://res.cloudinary.com/dyoefmx3t/image/upload/v1731177944/xxx_ikosij.png"
          }
          textHeader="Dr. Sankar Chakraborty"
          textSubHeader1="Oranizing President"
        />
        <Card
          imageSrc={assetUrl.bidhanDas_3}
          textHeader="Dr. Bidhan Das"
          textSubHeader1="Oranizing Secretary"
        />
        <Card
          imageSrc={assetUrl.satyakamChak_13}
          textHeader="Dr. Satyakam Chakraborty"
          textSubHeader1="Joint Secretary"
        />
      </div>
      <div style={jsStyles.row}>
        <Card
          imageSrc={assetUrl.laxmanBhatt_10}
          textHeader="Dr. Laxman Bhattacharjee"
          textSubHeader1="Joint Secretary"
        />
        <Card
          imageSrc={assetUrl.bishanathDas_4}
          textHeader="Dr. Biswanath Das"
          textSubHeader1="Treasurer"
        />
        <Card
          imageSrc={assetUrl.biplabNath_6}
          textHeader="Prof.(Dr.) Biplab Nath"
          textSubHeader1="Chairman Scientific Committee"
        />
      </div>
      <div style={jsStyles.row}>
        <Card
          imageSrc={assetUrl.prabrataSinha_7}
          textHeader="Dr. Priyabrata Sinha"
          textSubHeader1="Chairman,Event"
          textSubHeader2="Management Committee"
        />
        <Card
          imageSrc={assetUrl.tarunGuha_5}
          textHeader="Dr. Tarun Guha"
          textSubHeader1="Chairman, Invitation and"
          textSubHeader2="Hospitality Committee"
        />
        <Card
          imageSrc={assetUrl.tanoyDeb_8}
          textHeader="Dr. Tanmoy Deb"
          textSubHeader1="Chairman, Souvenir and"
          textSubHeader2="Journal Committee"
        />
      </div>
      <div style={jsStyles.row}>
        <Card
          imageSrc={assetUrl.sankarSarkar_9}
          textHeader="Dr. Sankar Sarkar"
          textSubHeader1="Chairman Refreshment Committee"
        />
        <Card
          imageSrc={
            "https://res.cloudinary.com/dyoefmx3t/image/upload/v1731177944/xxx_ikosij.png"
          }
          textHeader="Dr. Sutap Bhattacharjee"
          textSubHeader1="Chairman,"
          textSubHeader2="Cultural Committee"
        />
        <Card
          imageSrc={
            "https://res.cloudinary.com/dyoefmx3t/image/upload/v1731177944/xxx_ikosij.png"
          }
          textHeader="Dr. Karnajit Debroy"
          textSubHeader1="Chairman,"
          textSubHeader2="Transportation Committee"
        />
      </div>
    </div>
  );
};

export default CommitteeContianer;

const dynamicStyles = (): { [key: string]: CSSProperties } => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "6%",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  };
};
