import { createContext, useContext } from "react";

export const ApiContext = createContext({
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL, // Set global API URL
});

export const useApi = () => useContext(ApiContext);
