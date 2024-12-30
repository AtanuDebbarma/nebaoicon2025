import { useEffect } from "react";
import styles from "./formUi.module.css";
import { Form } from "./FormUI/FormUi";
import { GeneralInstructions } from "./FormUI/GeneralInstructions";

export const FormMain = () => {
  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);

  return (
    <div className={styles.mainContainter}>
      <GeneralInstructions />
      <Form />
    </div>
  );
};
