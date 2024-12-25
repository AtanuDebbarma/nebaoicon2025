import styles from "./formUi.module.css";
import { Form } from "./FormUI/FormUi";
import { GeneralInstructions } from "./FormUI/GeneralInstructions";

export const FormMain = () => {
  return (
    <div className={styles.mainContainter}>
      <GeneralInstructions />
      <Form />
    </div>
  );
};
