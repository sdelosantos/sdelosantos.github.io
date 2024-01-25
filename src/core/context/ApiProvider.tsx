import React, { createContext, useContext, useMemo } from 'react';
import axios, { AxiosInstance } from 'axios';

type ContextValue = {
  instance: AxiosInstance;
};

const ApiContext = createContext<ContextValue | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useApi(): AxiosInstance {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('Api is not defined');
  }

  return context.instance;
}

export default function ApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const BASE_URL: string = import.meta.env.VITE_APP_API_URL;

  const instance = useMemo(() => {
    const axioInstance = axios.create({
      baseURL: BASE_URL,
    });
    return axioInstance;
  }, [BASE_URL]);

  return (
    <ApiContext.Provider value={{ instance }}>{children}</ApiContext.Provider>
  );
}
