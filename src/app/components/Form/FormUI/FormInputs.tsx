import { CSSProperties } from "react";
import styles from "../formUi.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assetUrl } from "../../../../assets/data/assetUrl";

interface FormInputsProps {
  error?: string;
  inputType: string;
  inputName: string;
  inputPlaceholder: string;
  inputValue: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  minWidth?: string;
  options?: { value: string; label: string }[]; // For dropdown options
}

export const FormInputs: React.FC<FormInputsProps> = ({
  error,
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  handleChange,
  minWidth,
  options,
}) => {
  const jsStyles = dynamicStyles(error, minWidth, inputValue);

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
      {inputType === "select" ? (
        <select
          name={inputName}
          value={inputValue}
          onChange={handleChange}
          style={jsStyles.propsInput}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleChange}
          style={jsStyles.propsInput}
        />
      )}
    </div>
  );
};

const dynamicStyles = (
  error?: string,
  minWidth?: string,
  value?: string
): { [key: string]: CSSProperties } => {
  return {
    propsInput: {
      border: error ? "1px solid red" : undefined,
      backgroundColor: error ? "#f4cbcb" : undefined,
      minWidth: minWidth || undefined,
      color: value != "" ? "black" : "gray",
    },
  };
};
