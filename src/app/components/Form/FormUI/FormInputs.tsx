import { CSSProperties } from "react";
import styles from "../formUi.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assetUrl } from "../../../../../assets/data/assetUrl";

interface FormInputsProps {
  error?: string;
  inputType: string;
  inputName: string;
  inputPlaceholder: string;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minWidth?: string;
}

export const FormInputs: React.FC<FormInputsProps> = ({
  error,
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  handleChange,
  minWidth,
}) => {
  const jsStyles = dynamicStyles(error, minWidth);
  return (
    <div className={styles.inputContainter}>
      <div className={styles.iconWithTooltip}>
        <FontAwesomeIcon
          icon={assetUrl.exclaim}
          className={styles.caution}
          style={{ color: error && "red" }}
        />
        {error && <div className={styles.customTooltip}>{error}</div>}
      </div>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleChange}
        style={jsStyles.propsInput}
      />
    </div>
  );
};

const dynamicStyles = (
  error?: string,
  minWidth?: string
): { [key: string]: CSSProperties } => {
  return {
    propsInput: {
      border: error ? "1px solid red" : undefined,
      backgroundColor: error ? "#f4cbcb" : undefined,
      minWidth: minWidth || undefined,
    },
  };
};
