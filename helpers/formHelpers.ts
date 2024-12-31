// helpers.ts
import { FormValues, Errors } from "../src/app/components/Form/FormUI/FormUi";
import {
  trimFormValues,
  validateaccompanyingPersons,
  validateAmount,
  validateCity,
  validateDate,
  validateDesignation,
  validateEmail,
  validateMode,
  validateName,
  validatePhoneNumber,
  validateRegistrationNo,
  validateState,
  validateZip,
} from "../utils/validators";
import { checkForDuplicates, sendDataToSheet } from "../utils/googlesheet";
import { NavigateFunction } from "react-router-dom";

// Handle form submission with validation
export const handleSubmit = async (
  formValues: FormValues,
  setErrors: React.Dispatch<React.SetStateAction<Errors>>,
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  // Trim all string values
  const trimmedValues = trimFormValues(formValues);

  // Validation with trimmed values
  const nameError = validateName(trimmedValues.name);
  const designationError = validateDesignation(trimmedValues.designation);
  const registrationNoError = validateRegistrationNo(
    trimmedValues.registrationNo
  );
  const addressError =
    trimmedValues.address === "" ? "Address cannot be empty." : undefined;
  const cityError = validateCity(trimmedValues.city);
  const stateError = validateState(trimmedValues.state);
  const zipError = validateZip(trimmedValues.zip);
  const emailError = validateEmail(trimmedValues.email);
  const phoneError = validatePhoneNumber(trimmedValues.phone);
  const paymentError =
    trimmedValues.paymentDetails === ""
      ? "Transaction ID cannot be empty."
      : undefined;
  const amountError = validateAmount(trimmedValues.amount);
  const dateError = validateDate(trimmedValues.date);
  const modeError = validateMode(trimmedValues.mode);
  const accompanyingPersonsError = validateaccompanyingPersons(
    trimmedValues.accompanyingPersons
  );

  const newErrors = {
    name: nameError,
    designation: designationError,
    registrationNo: registrationNoError,
    accompanyingPersons: accompanyingPersonsError,
    address: addressError,
    city: cityError,
    state: stateError,
    zip: zipError,
    email: emailError,
    phone: phoneError,
    amount: amountError,
    date: dateError,
    mode: modeError,
    paymentDetails: paymentError,
  };

  // Update the errors state
  setErrors(newErrors);

  // Check if any error exists
  const hasError = Object.values(newErrors).some(
    (error) => error !== undefined
  );

  if (hasError) return;

  setSubmitting(true);
  setMessage("Submitting Form. Please Don't Refresh or Close the Browser");
  // Wait 1.5 seconds before checking for duplicates
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Check for duplicate phone or transaction ID with trimmed values
  const { phoneExists, transactionExists, error } = await checkForDuplicates(
    trimmedValues.phone,
    trimmedValues.paymentDetails
  );

  // Set errors if duplicates are found
  if (phoneExists) {
    setMessage("This phone number is already registered.");
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: "This phone number is already registered.",
    }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
    return;
  }

  if (transactionExists) {
    setMessage("This transaction ID is already used.");
    setErrors((prevErrors) => ({
      ...prevErrors,
      paymentDetails: "This transaction ID is already used.",
    }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
    return;
  }
  if (error) {
    setMessage(error);
    setErrors((prevErrors) => ({
      ...prevErrors,
      error: error,
    }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
    return;
  }

  // Map and send data if no duplicates found
  const mapFormValuesToSheetFields = (trimmedValues: FormValues) => ({
    ID: "INCREMENT",
    Name: trimmedValues.name,
    Designation: trimmedValues.designation,
    "NEBAOI Registration No": trimmedValues.registrationNo,
    "Accompanying Persons": trimmedValues.accompanyingPersons,
    Address: trimmedValues.address,
    City: trimmedValues.city,
    State: trimmedValues.state,
    ZIP: trimmedValues.zip,
    Email: trimmedValues.email,
    Phone: trimmedValues.phone,
    Amount: trimmedValues.amount,
    "Date Of Transaction": trimmedValues.date,
    Mode: trimmedValues.mode,
    "Transaction ID": trimmedValues.paymentDetails,
  });

  const sheetData = mapFormValuesToSheetFields(trimmedValues);
  const response = await sendDataToSheet(sheetData);

  if (response.error) {
    // Display a general error message since all API keys have been tried
    setErrors((prevErrors) => ({
      ...prevErrors,
      error:
        response.error ||
        "Failed to send data. Please try again or contact us.",
    }));
    setSubmitting(false);
    return;
  }
  if (response.success) {
    // Display success message and modal
    setMessage("Registration successful. Redirecting to Home Page.");
    setSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Delay before navigation
    setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Navigate to /home
    navigate("/home");
  }
};

// Handle input changes
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
  setErrors: React.Dispatch<React.SetStateAction<Errors>>
) => {
  const { name, value } = e.target;

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: undefined,
  }));

  setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};
