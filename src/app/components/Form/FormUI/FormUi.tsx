// Form.tsx
import styles from "../formUi.module.css";
import { useState } from "react";
import { FormInputs } from "./FormInputs";
import { handleSubmit, handleChange } from "../../../../../helpers/formHelpers";
import LoadingModal from "../LoadingModal";
import { useNavigate } from "react-router-dom";

export interface FormValues {
  name: string;
  designation: string;
  registrationNo: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
  paymentDetails: string;
  date: string;
  amount: string;
}
export type Errors = {
  name?: string;
  designation?: string;
  registrationNo?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  email?: string;
  phone?: string;
  paymentDetails?: string;
  amount?: string;
  date?: string;
  error?: string;
};

export const Form: React.FC = () => {
  const initialFormValues: FormValues = {
    name: "",
    designation: "",
    registrationNo: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    paymentDetails: "",
    date: "",
    amount: "",
  };
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Errors>({
    name: "",
    designation: "",
    registrationNo: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    paymentDetails: "",
    amount: "",
    date: "",
    error: "",
  });
  const navigate = useNavigate();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  return (
    <div className={styles.formContainer}>
      <span className={styles.formHeader} style={{ color: "white" }}>
        REGISTRATION FORM
      </span>
      <div className={styles.formGrid}>
        <FormInputs
          error={errors.name}
          inputType="text"
          inputName="name"
          inputPlaceholder="Name"
          inputValue={formValues.name}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.designation}
          inputType="text"
          inputName="designation"
          inputPlaceholder="Designation"
          inputValue={formValues.designation}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.registrationNo}
          inputType="text"
          inputName="registrationNo"
          inputPlaceholder="NEBAOI Registration No"
          inputValue={formValues.registrationNo}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.address}
          inputType="text"
          inputName="address"
          inputPlaceholder="Address"
          inputValue={formValues.address}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.city}
          inputType="text"
          inputName="city"
          inputPlaceholder="City"
          inputValue={formValues.city}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.state}
          inputType="text"
          inputName="state"
          inputPlaceholder="State"
          inputValue={formValues.state}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.zip}
          inputType="text"
          inputName="zip"
          inputPlaceholder="ZIP"
          inputValue={formValues.zip}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.email}
          inputType="email"
          inputName="email"
          inputPlaceholder="Email"
          inputValue={formValues.email}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.phone}
          inputType="text"
          inputName="phone"
          inputPlaceholder="Phone No."
          inputValue={formValues.phone}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.paymentDetails}
          inputType="text"
          inputName="paymentDetails"
          inputPlaceholder="UPI/RTGS/NEFT Transaction ID"
          inputValue={formValues.paymentDetails}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <div className={styles.paymentDetailsContainer}>
          <FormInputs
            error={errors.amount}
            inputType="text"
            inputName="amount"
            inputPlaceholder="Amount"
            inputValue={formValues.amount}
            handleChange={(e) => handleChange(e, setFormValues, setErrors)}
            minWidth="100%"
          />
          <FormInputs
            error={errors.date}
            inputType="text"
            inputName="date"
            inputPlaceholder="Date of Transaction - dd/mm/yyyy"
            inputValue={formValues.date}
            handleChange={(e) => handleChange(e, setFormValues, setErrors)}
            minWidth="100%"
          />
        </div>
      </div>
      <p className={styles.note}>
        N.B: Post Graduate students must submit authorization letter from head
        of department.
      </p>
      {errors.error && (
        <span className={styles.note} style={{ color: "red" }}>
          {errors.error}
        </span>
      )}
      <div
        className={styles.button}
        onClick={() =>
          handleSubmit(
            formValues,
            setErrors,
            setSubmitting,
            setMessage,
            setSuccess,
            navigate
          )
        }
      >
        <span>Submit</span>
      </div>
      {isSubmitting && (
        <LoadingModal
          message={message}
          success={success}
          phoneError={errors.phone}
          transactionError={errors.paymentDetails}
          otherError={errors.error}
        />
      )}
    </div>
  );
};
