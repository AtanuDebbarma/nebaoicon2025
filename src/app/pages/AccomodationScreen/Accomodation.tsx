import { assetUrl } from "../../../assets/data/assetUrl";
import styles from "./accomodationStyles.module.css";

const Accommodation: React.FC = () => {
  const jsStyles = dynamicStyles();
  return (
    <div style={jsStyles.mainContainer}>
      <h2 className={styles.tableHeader}>ACCOMODATIONS</h2>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hotel Polo Towers</td>
            <td>03812310110</td>
            <td>
              <a
                href="https://maps.app.goo.gl/jvAYNApWqA3KJF3D7"
                target="blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Hotel Noah Spire</td>
            <td>09245049595</td>
            <td>
              <a
                href="https://maps.app.goo.gl/VoSR1gtAMZAvz3Aj6"
                target="blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Hotel Sonar Tori</td>
            <td>09863747519</td>
            <td>
              <a
                href="https://maps.app.goo.gl/jNxo7XnJrCiKNzGS7"
                target="blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Hotel Welcome Palace</td>
            <td>03812380101</td>
            <td>
              <a
                href="https://maps.app.goo.gl/nASMgjHdjYCVgcUf8"
                target="blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Hotel Gloria Inn</td>
            <td>09856686682</td>
            <td>
              <a
                href="https://maps.app.goo.gl/VAfAq9M3LRa6LLoT9"
                target="blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Hotel Royal Hub</td>
            <td>07005150717</td>
            <td>
              <a
                href="https://maps.app.goo.gl/Atky7ZeS7mT1ipaYA"
                target="blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Accommodation;

const dynamicStyles = (): { [key: string]: React.CSSProperties } => {
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
