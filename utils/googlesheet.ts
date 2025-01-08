import axios, { AxiosError } from "axios";

const API_KEYS = [
  import.meta.env.VITE_API_KEY_1,
  import.meta.env.VITE_API_KEY_2,
  import.meta.env.VITE_API_KEY_3,
];

let currentApiKeyIndex = 0;

const getCurrentApiKey = () => API_KEYS[currentApiKeyIndex];
const switchApiKey = () => {
  currentApiKeyIndex = (currentApiKeyIndex + 1) % API_KEYS.length; // This will cycle through all keys
};

export const sendDataToSheet = async (
  data: Record<string, string | number>,
  retryCount: number = API_KEYS.length
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await axios.post(
      getCurrentApiKey(),
      { data: [data] },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Data successfully sent:", response.data);
    return { success: true };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const errorCode = axiosError.response.status;
      if (
        errorCode === 429 ||
        errorCode === 1015 ||
        errorCode === 402 ||
        errorCode === 400 ||
        errorCode === 404 ||
        errorCode === 405 ||
        errorCode === 500
      ) {
        // If we get a 404 or others, switch the API key and try again if retries are left
        if (retryCount > 1) {
          switchApiKey();
          return sendDataToSheet(data, retryCount - 1);
        }
      }

      return {
        success: false,
        error: "Error sending data to Google Sheets",
      };
    }

    return {
      success: false,
      error: "Unknown error occurred. Please try again or contact us.",
    };
  }
};

export const checkForDuplicates = async (
  phone: string,
  transactionID: string,
  retryCount: number = API_KEYS.length
): Promise<{
  phoneExists: boolean;
  transactionExists: boolean;
  error?: string;
}> => {
  const FIELD_NAMES = {
    phone: "Phone",
    transactionID: "Transaction ID",
  };

  try {
    // Search for existing phone number
    const phoneResponse = await fetch(
      `${getCurrentApiKey()}/search?${FIELD_NAMES.phone}=${encodeURIComponent(
        phone
      )}`
    );

    if (!phoneResponse.ok) {
      const errorCode = phoneResponse.status;
      if (
        errorCode === 429 ||
        errorCode === 1015 ||
        errorCode === 402 ||
        errorCode === 400 ||
        errorCode === 404 ||
        errorCode === 405 ||
        errorCode === 500
      ) {
        if (retryCount > 1) {
          switchApiKey();
          return checkForDuplicates(phone, transactionID, retryCount - 1);
        }
      }
      throw new Error(`HTTP error! Status: ${errorCode}`);
    }

    const phoneData = await phoneResponse.json();

    // Search for existing transaction ID
    const transactionResponse = await fetch(
      `${getCurrentApiKey()}/search?${
        FIELD_NAMES.transactionID
      }=${encodeURIComponent(transactionID)}`
    );

    if (!transactionResponse.ok) {
      const errorCode = transactionResponse.status;
      if (
        errorCode === 429 ||
        errorCode === 1015 ||
        errorCode === 402 ||
        errorCode === 400 ||
        errorCode === 404 ||
        errorCode === 405 ||
        errorCode === 500
      ) {
        if (retryCount > 1) {
          switchApiKey();
          return checkForDuplicates(phone, transactionID, retryCount - 1);
        }
      }
      throw new Error(`HTTP error! Status: ${errorCode}`);
    }

    const transactionData = await transactionResponse.json();

    return {
      phoneExists: phoneData.length > 0,
      transactionExists: transactionData.length > 0,
    };
  } catch (error) {
    console.error("Error checking for duplicates:", error);
    return {
      phoneExists: false,
      transactionExists: false,
      error: "Unknown error occurred. Please try again or contact us.",
    };
  }
};
