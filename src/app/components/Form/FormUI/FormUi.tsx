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
  accompanyingPersons: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
  amount: string;
  date: string;
  mode: string;
  paymentDetails: string;
}
export type Errors = {
  name?: string;
  designation?: string;
  registrationNo?: string;
  accompanyingPersons?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  email?: string;
  phone?: string;
  amount?: string;
  date?: string;
  mode?: string;
  paymentDetails?: string;
  error?: string;
};

export const Form: React.FC = () => {
  const initialFormValues: FormValues = {
    name: "",
    designation: "",
    registrationNo: "",
    accompanyingPersons: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    amount: "",
    date: "",
    mode: "",
    paymentDetails: "",
  };
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Errors>({
    name: "",
    designation: "",
    registrationNo: "",
    accompanyingPersons: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    amount: "",
    date: "",
    mode: "",
    paymentDetails: "",
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
          error={errors.mode}
          inputType="select"
          inputName="accompanyingPersons"
          inputPlaceholder="Accompanying persons(Charges as applicable)"
          inputValue={formValues.accompanyingPersons}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
          options={[
            {
              value: "",
              label: "Accompanying persons(Charges as applicable)",
            }, // Default option
            { value: "None", label: "None" },
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
          ]}
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
          error={errors.amount}
          inputType="text"
          inputName="amount"
          inputPlaceholder="Amount"
          inputValue={formValues.amount}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.date}
          inputType="text"
          inputName="date"
          inputPlaceholder="Date of Transaction - dd/mm/yyyy"
          inputValue={formValues.date}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
        <FormInputs
          error={errors.mode}
          inputType="select"
          inputName="mode"
          inputPlaceholder="Mode of Payment"
          inputValue={formValues.mode}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
          options={[
            { value: "", label: "Select Mode of Payment" }, // Default option
            { value: "UPI", label: "UPI" },
            { value: "Bank Transfer", label: "Bank Transfer" },
          ]}
        />
        <FormInputs
          error={errors.paymentDetails}
          inputType="text"
          inputName="paymentDetails"
          inputPlaceholder="Transaction ID"
          inputValue={formValues.paymentDetails}
          handleChange={(e) => handleChange(e, setFormValues, setErrors)}
        />
      </div>
      <p className={styles.note}>
        N.B: Post Graduate students must submit authorization letter from head
        of department.
      </p>
      {errors.error && (
        <span
          className={styles.note}
          style={{
            color: "red",
            marginTop: "1%",
            textDecoration: "underline",
            lineHeight: "inherit",
          }}
        >
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
