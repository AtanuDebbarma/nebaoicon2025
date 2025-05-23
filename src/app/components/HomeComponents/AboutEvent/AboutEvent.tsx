import { assetUrl } from "../../../../assets/data/assetUrl";
import { RegisterButton } from "../../RegistrationPage/RegistrationUI";
import styles from "./aboutEvent.module.css";

const AboutEvent: React.FC = () => {
  return (
    <div
      className={styles.aboutContainer}
      style={{ backgroundImage: `url(${assetUrl.aboutGradiant})` }}
    >
      <div className={styles.aboutWrapper}>
        <div className={styles.headerWrapper}>
          <h4>ABOUT THE EVENT</h4>
        </div>
        <div className={styles.paragraphWrapper}>
          <p>
            36th Annual Conference of NEBAOI – 2025.
            <br />
            <br />
            Venue: Pragna Bhavan Convention Center, <br />
            Gorkhabasti, 79 Tilla, Agartala, Tripura.
            <br />
            Date: 14th - 15th November 2025.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          gap: "10px",
          marginTop: "5%",
          marginBottom: "2%",
        }}
      >
        <RegisterButton form={false} marginTop="0%" marginBottom="0%" />
        <RegisterButton
          form={true}
          marginTop="0%"
          marginBottom="0%"
          padding="0 30px"
        />
      </div>
    </div>
  );
};

export default AboutEvent;
