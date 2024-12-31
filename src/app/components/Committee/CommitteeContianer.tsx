import { CSSProperties } from "react";
import { assetUrl } from "../../../../assets/data/assetUrl";
import { Card } from "./Card";
import styles from "./styles.module.css";
import {
  committeeData,
  CommitteeMember,
} from "../../../../helpers/committeData";

const CommitteeContainer: React.FC = () => {
  const jsStyles = dynamicStyles();

  // Group the data by rows using reduce
  const groupedData = committeeData.reduce((acc, card) => {
    if (!acc[card.row]) {
      acc[card.row] = [];
    }
    acc[card.row].push(card);
    return acc;
  }, {} as { [key: number]: CommitteeMember[] });

  return (
    <div style={jsStyles.container}>
      <h2 className={styles.heading}>ORGANIZING COMMITTEE</h2>
      <Card
        imageSrc={assetUrl.promoteshRoy_1}
        textHeader="Dr. Promotesh Roy"
        textSubHeader1="Patron"
      />
      {Object.entries(groupedData).map(([rowIndex, rowData]) => (
        <div key={rowIndex} style={jsStyles.row}>
          {rowData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              textHeader={card.textHeader}
              textSubHeader1={card.textSubHeader1}
              textSubHeader2={card.textSubHeader2}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommitteeContainer;

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
      width:"100%"
    },
  };
};
