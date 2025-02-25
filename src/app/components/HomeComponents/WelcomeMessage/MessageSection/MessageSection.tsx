import styles from "./message.module.css";

const MessageSection: React.FC = () => {
  return (
    <div className={styles.addressContainter}>
      <div className={styles.addressHeader}>Welcome Address</div>
      <p className={styles.paragraph}>
        Esteemed Colleagues,
        <br />
        <br />
        It’s a privilege for AOI- Tripura State Branch, to get an opportunity to
        organize the flagship conference of the Otorhinolaryngologists of North
        East India. AOI-TSB will be hosting the 36th NEBAOICON in the city of
        Agartala which is scheduled to be held from 14th - 15th November, 2025.
        While we aim to invite eminent national level resource persons for
        scientific deliberations, we will also provide platform for young
        prodigies of North East to showcase their talent.
        <br />
        <br />
        Agartala , the capital city of Tripura, is rich in culture and heritage.
        The organizers will leave no stone unturned for your comfortable and
        memorable stay in this historic city.
        <br />
        <br />
        Hence, your graceful presence on this occasion is cordially requested
        which not only will turn this conference into an extravaganza but will
        also encourage us to successfully accomplish our goal to make this event
        a grand success.
        <br />
        <br />
        Anticipating your whole hearted.
      </p>
      <p
        className={styles.paragraph}
        style={{ color: "#09109d", fontWeight: "700" }}
      >
        Long live NEBAOI.
      </p>
      <span className={styles.welcomeFooter}>
        <p style={{ textAlign: "left" }}>
          <strong>DR. SANKAR CHAKRABORTY</strong>
          <br />
          Organizing President
        </p>
        <p style={{ textAlign: "right" }}>
          <strong>DR. BIDHAN DAS</strong>
          <br />
          Organizing Secretary
        </p>
      </span>
    </div>
  );
};

export default MessageSection;
