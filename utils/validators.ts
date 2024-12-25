import { FormValues } from "../src/app/components/Form/FormUI/FormUi";

export const validateName = (name: string): string | undefined => {
  if (name.length <= 4) {
    return "Name should be at least 4 letters.";
  }
  if (!/^[A-Za-z\s]+$/.test(name)) {
    return "Name should contain only letters.";
  }
  if (name.length > 150) {
    return "Name should not exceed 150 characters.";
  }
  return undefined;
};

export const validateDesignation = (
  designation: string
): string | undefined => {
  if (!designation) {
    return "Designation cannot be empty.";
  }
  if (designation.length > 150) {
    return "Designation should not exceed 150 characters.";
  }
  return undefined;
};

export const validateRegistrationNo = (
  registrationNo: string
): string | undefined => {
  if (!registrationNo) {
    return "Registration No cannot be empty.";
  }
  if (!/^[A-Za-z0-9]+$/.test(registrationNo)) {
    return "Registration No should contain only letters and numbers.";
  }
  if (registrationNo.length > 100) {
    return "Registration No should not exceed 100 characters.";
  }
  return undefined;
};

export const validateCity = (city: string): string | undefined => {
  if (!city) {
    return "City cannot be empty.";
  }
  if (!/^[A-Za-z\s]+$/.test(city)) {
    return "City should contain only letters.";
  }
  if (city.length > 100) {
    return "City should not exceed 100 characters.";
  }
  return undefined;
};
export const validateState = (state: string): string | undefined => {
  if (!state) {
    return "State cannot be empty.";
  }
  if (!/^[A-Za-z\s]+$/.test(state)) {
    return "State should contain only letters.";
  }
  if (state.length > 100) {
    return "State should not exceed 100 characters.";
  }
  return undefined;
};

export const validateZip = (zip: string): string | undefined => {
  if (zip.trim() === "") {
    return "ZIP code cannot be empty.";
  }
  const zipNumber = Number(zip);
  if (isNaN(zipNumber)) {
    return "ZIP code must be a valid number.";
  }

  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (email.trim() === "") {
    return "Email cannot be empty.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  return undefined; // No errors
};

export const validatePhoneNumber = (phone: string): string | undefined => {
  if (phone.trim() === "") {
    return "Phone number cannot be empty.";
  }

  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    return "Phone number must be exactly 10 digits and contain only numbers.";
  }

  return undefined; // No errors
};

export const validateDate = (date: string): string | undefined => {
  if (date.trim() === "") {
    return "Date cannot be empty.";
  }

  // Split the date into components
  const [day, month, year] = date.split("/").map((part) => part.trim());

  // Validate day, month, and year
  if (!day || !month || !year || isNaN(+day) || isNaN(+month) || isNaN(+year)) {
    return "Date must be in the format dd/mm/yyyy and a valid date.";
  }

  // Convert to numbers for further validation
  const dayNum = +day;
  const monthNum = +month;

  // Check if day and month are in valid ranges
  if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12) {
    return "Date must be in the format dd/mm/yyyy and a valid date.";
  }

  // Format day and month to ensure they are two digits
  const formattedDay = day.padStart(2, "0");
  const formattedMonth = month.padStart(2, "0");

  // Construct the formatted date
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  // Regex pattern for dd/mm/yyyy format, allowing valid days and months.
  const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!datePattern.test(formattedDate)) {
    return "Date must be in the format dd/mm/yyyy and a valid date.";
  }

  // If valid, return undefined
  return undefined;
};

export const validateAmount = (amount: string): string | undefined => {
  if (amount.trim() === "") {
    return "Amount cannot be empty.";
  }

  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount < 0) {
    return "Amount cannot be negative number.";
  }

  return undefined; // No errors
};

export const trimFormValues = (formValues: FormValues): FormValues => {
  return Object.fromEntries(
    Object.entries(formValues).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value,
    ])
  ) as FormValues;
};
